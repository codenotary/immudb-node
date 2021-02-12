import crypto from 'crypto';

import * as messages from './proto/schema_pb';
import Util from './util'

const util = new Util()

function bitLength(n: number): number {
    return parseInt((n >>> 0).toString(2))
}
const hashUint8Array = (value: Uint8Array) => new Uint8Array(crypto.createHash('sha256').update(value).digest())

const LEAF_PREFIX = Uint8Array.from([0x00])
const NODE_PREFIX = Uint8Array.from([0x01])

class HTree {
    public levels: Array<Array<Uint8Array>>
    public maxWidth: number
    public width: number = 0
    public root: Uint8Array = Uint8Array.from([])

    constructor(maxWidth: number) {
        if (maxWidth < 1) {
            throw new Error("Illegal HTree arguments");
        } else {
            this.maxWidth = maxWidth
            let lw = 1

            while (lw < maxWidth) {
                lw = lw << 1
            }

            const height = bitLength(maxWidth - 1) + 1

            this.levels = new Array(height);

            for (let i = 0; i < height; i++) {
                this.levels[i] = new Array(lw >> i);
            }
        }
    }

    buildWith(digests: Array<Uint8Array>) {
        if (digests.length > this.maxWidth) {
            throw new Error('HTree max width exceeded')
        }
        if (digests.length === 0) {
            throw new Error('Illegal HTree buildWith')
        }
        for (let i = 0; i < digests.length; i++) {
            const leaf = new Uint8Array(2)
            
            leaf.set(LEAF_PREFIX)
            leaf.set(digests[i], 1)

            this.levels[0][i] = hashUint8Array(leaf)
        }
        const l = 0
        const w = digests.length
        while (w > 1) {
            let wn = 0
            let i = 0

            while (i + 1 < w) {
                const b = new Uint8Array(3)

                b.set(NODE_PREFIX)
                b.set(this.levels[l][i], 1)
                b.set(this.levels[l][i+1], 2)
                
                this.levels[l + 1][wn] = hashUint8Array(b)

                wn++
                i += 2
            }

            if (w % 2 === 1) {
                this.levels[l + 1][wn] = this.levels[l][w-1]

                wn++
            }
        }
        this.width = digests.length
        this.root = this.levels[l][0]
    }

    inclusionProof(i: number): messages.InclusionProof | undefined {
        if (i >= this.width) {
            throw new Error("Illegal inclusionProof arguments");
        }

        let m = 0
        let n = this.width
        let offset = 0
        const proof = new messages.InclusionProof()

        proof.setLeaf(i)
        proof.setWidth(this.width)

        if (this.width === 1) {
            return proof
        }

        while (true) {
            const d = bitLength(n - 1)
            const k = 1 << d - 1
            let l
            let r

            if (m < k) {
                l = offset + k
                r = offset + n - 1
                n = k
            } else {
                l = offset
                r = offset + k - 1

                m = m - k
                n = n - k
                offset += k
            }
            
            const layer = bitLength(r - l)
            const index =  l / (1 << layer)

            const a = this.levels[layer][index]
            const b = proof.getTermsList_asU8()
            const termsList: Array<Uint8Array> = [a, ...b]

            proof.setTermsList(termsList)

            if (n < 1 || (n === 0 && m === 0)) {
                return proof
            }
        }
    }
}

export const inclusionProofFrom = ({ leaf, width, termsList }: messages.InclusionProof.AsObject) => {
    const iProof = new messages.InclusionProof()

    iProof.setLeaf(leaf)
    iProof.setWidth(width)
    iProof.setTermsList(termsList)

    return iProof
}

export const dualProofFrom = ({
    sourcetxmetadata,
    targettxmetadata,
    inclusionproofList,
    consistencyproofList,
    targetbltxalh,
    lastinclusionproofList,
    linearproof
}: messages.DualProof.AsObject) => {
    const dProof = new messages.DualProof();

    if (sourcetxmetadata !== undefined) {
        const sTxMetadata = new messages.TxMetadata();
        const { id, prevalh, ts, nentries, eh, bltxid, blroot } = sourcetxmetadata

        sTxMetadata.setId(id);
        sTxMetadata.setPrevalh(prevalh);
        sTxMetadata.setTs(ts);
        sTxMetadata.setNentries(nentries);
        sTxMetadata.setEh(eh);
        sTxMetadata.setBltxid(bltxid);
        sTxMetadata.setBlroot(blroot);

        dProof.setSourcetxmetadata(sTxMetadata);
    }

    if (targettxmetadata !== undefined) {
        const tTxMetadata = new messages.TxMetadata();
        const { id, prevalh, ts, nentries, eh, bltxid, blroot } = targettxmetadata

        tTxMetadata.setId(id);
        tTxMetadata.setPrevalh(prevalh);
        tTxMetadata.setTs(ts);
        tTxMetadata.setNentries(nentries);
        tTxMetadata.setEh(eh);
        tTxMetadata.setBltxid(bltxid);
        tTxMetadata.setBlroot(blroot);

        dProof.setTargettxmetadata(tTxMetadata);
    }

    if (inclusionproofList !== undefined) {
        dProof.setInclusionproofList(inclusionproofList)
    }

    if (consistencyproofList !== undefined) {
        dProof.setConsistencyproofList(consistencyproofList)
    }

    if (targetbltxalh !== undefined) {
        dProof.setTargetbltxalh(targetbltxalh)
    }

    if (lastinclusionproofList !== undefined) {
        dProof.setLastinclusionproofList(lastinclusionproofList)
    }

    if (linearproof !== undefined) {
        const lProof = new messages.LinearProof();
        const { sourcetxid, targettxid, termsList } = linearproof

        lProof.setSourcetxid(sourcetxid)
        lProof.setTargettxid(targettxid)
        lProof.setTermsList(termsList)

        dProof.setLinearproof(lProof)
    }

    return dProof
}

export const verifyInclusion = (proof: messages.InclusionProof, digest: messages.KeyValue, root: Uint8Array) => {
    if (proof === undefined) {
        return false
    }
    const leaf = new Uint8Array(9)

    leaf.set(LEAF_PREFIX)
    leaf.set(digest.serializeBinary(), 1)

    let calcRoot = hashUint8Array(leaf)
    let i = proof.getLeaf()
    let r = proof.getWidth() - 1

    for (let t of proof.getTermsList_asU8()) {
        const b = new Uint8Array(3)

        b.set(NODE_PREFIX)

        if (i % 2 === 0 && i !== r) {
            b.set(calcRoot, 1)
            b.set(t, 2)
        } else {
            b.set(t, 1)
            b.set(calcRoot, 2)
        }
        calcRoot = hashUint8Array(b)
        i /= 2
        r /= 2
    }

    console.log('i', i)
    console.log('i', i)
    console.log('root', root)
    console.log('calcRoot', calcRoot)

    return i === r && util.equalArray(root, calcRoot)
}

export const verifyDualProof = (dualProof: messages.DualProof, sourceId: number, targetId: number, sourceAlh: Uint8Array, targetAlh: Uint8Array) => {
    if (dualProof === undefined) {
        return false
    }

    const sourcetxmetadata = dualProof.getSourcetxmetadata()
    const targettxmetadata = dualProof.getTargettxmetadata()
    const inclusionproofList = dualProof.getInclusionproofList_asU8()
    const consistencyproofList = dualProof.getConsistencyproofList_asU8()
    const lastinclusionproofList = dualProof.getLastinclusionproofList_asU8()
    const targetbltxalh = dualProof.getTargetbltxalh_asU8()
    
    if (
        sourcetxmetadata === undefined ||
        targettxmetadata === undefined
    ) {
        return false
    }

    const sId = sourcetxmetadata.getId()
    const tId = targettxmetadata.getId()
    const tPrevalh = targettxmetadata.getPrevalh_asU8()
    const tBltxid = targettxmetadata.getBltxid()
    const tBlroot = targettxmetadata.getBlroot_asU8()
    const sPrevalh = sourcetxmetadata.getPrevalh_asU8()
    const sBltxid = sourcetxmetadata.getBltxid()
    const sBlroot = sourcetxmetadata.getBlroot_asU8()

    if (
        sId !== sourceId ||
        tId !== targetId
    ) {
        return false
    }
    if (sId === 0 || sId > tId) {
        return false
    }
    if (sourceAlh !== sPrevalh) {
        return false
    }
    if (targetAlh !== tPrevalh) {
        return false
    }
    if (sourceId < tBltxid && verifyInclusionAHT(inclusionproofList, sourceId, tBltxid, sourceAlh, tBlroot) === false) {
        return false
    }
    if (tBltxid > 0 && verifyConsistency(consistencyproofList, sBltxid, tBltxid, sBlroot, tBlroot) === false) {
        return false
    }
    if (tBltxid > 0 && verifyLastInclusion(lastinclusionproofList, tBltxid, targetbltxalh, tBlroot) === false) {
        return false
    }

    const linearproof = dualProof.getLinearproof()

    if (linearproof === undefined) {
        return false
    } else {
        let ret: boolean
        if (sourceId < tBltxid) {
            ret = verifyLinearProof(linearproof, tBltxid, targetId, targetbltxalh, targetAlh)
        } else {
            ret = verifyLinearProof(linearproof, sourceId, targetId, sourceAlh, targetAlh)
        }
    
        return ret
    }
}

const verifyInclusionAHT = (inclusionProofList: Array<Uint8Array>, blTxId: number, targetId: number, targetBlTxAlh: Uint8Array, targetAlh: Uint8Array): boolean => {
    if (blTxId > targetId && inclusionProofList.length === 0) {
        return false
    }

    let i1 = blTxId - 1
    let j1 = targetId - 1
    let ciRoot = targetBlTxAlh
    let b = new Uint8Array(inclusionProofList.length)

    for (let [index,h] of inclusionProofList.entries()) {
        if (i1 % 2 === 0 && i1 !== j1) {
            b.set(ciRoot, index * 2)
            b.set(h, index * 2 + 1)
        } else {
            b.set(h, index * 2)
            b.set(ciRoot, index * 2 + 1)
        }
        ciRoot = hashUint8Array(b)
        i1 = i1 >> 1
        j1 = j1 >> 1
    }

    return ciRoot === targetAlh
}
const verifyConsistency = (consistencyProofList: Array<Uint8Array>, sourceBlTxId: number, targetBlTxId: number, sourceBlTxAlh: Uint8Array, targetBlTxAlh: Uint8Array): boolean => {
    if (sourceBlTxId > targetBlTxId || sourceBlTxId === 0 || (sourceBlTxId < targetBlTxId && consistencyProofList.length === 0)) {
        return false
    }

    if (sourceBlTxId === targetBlTxId && consistencyProofList.length === 0) {
        return sourceBlTxAlh === targetBlTxAlh
    }

    let fn = sourceBlTxId - 1
    let sn = targetBlTxId - 1

    while (fn % 2 === 1) {
        fn = fn >> 1
        sn = sn >> 1
    }

    let ciRoot = consistencyProofList[0]
    let cjRoot = consistencyProofList[0]

    for (let h of consistencyProofList.slice(1)) {
        if (fn % 2 === 1 || fn === sn) {
            let b = new Uint8Array(3)

            b.set(NODE_PREFIX)
            b.set(h, 1)
            b.set(ciRoot, 2)

            ciRoot = hashUint8Array(b)

            b = new Uint8Array(3)

            b.set(NODE_PREFIX)
            b.set(h, 1)
            b.set(ciRoot, 2)

            cjRoot = hashUint8Array(b)

            while (fn % 2 === 0 && fn !== 0) {
                fn = fn >> 1
                sn = sn >> 1
            }
        } else {
            let b = new Uint8Array(3)

            b.set(NODE_PREFIX)
            b.set(cjRoot, 1)
            b.set(h, 2)

            cjRoot = hashUint8Array(b)
        }

        fn = fn >> 1
        sn = sn >> 1
    }

    return sourceBlTxAlh === ciRoot && targetBlTxAlh === cjRoot
}
const verifyLastInclusion = (lastInclusionproofList: Array<Uint8Array>, targetBlTxId: number, targetBlTxAlh: Uint8Array, targetBlRoot: Uint8Array): boolean => {
    if (targetBlTxId === 0) {
        return false
    }

    let i1 = targetBlTxId - 1
    let iRoot = targetBlTxAlh

    for (let h of lastInclusionproofList) {
        let b = new Uint8Array(3)

        b.set(NODE_PREFIX)
        b.set(h, 1)
        b.set(iRoot, 2)

        iRoot = hashUint8Array(b)
        i1 = i1 >> 1
    }

    return targetBlRoot === iRoot
}
const verifyLinearProof = (linearProof: messages.LinearProof, sourceId: number, targetId: number, sourceAlh: Uint8Array, targetAlh: Uint8Array): boolean => {
    if (linearProof === undefined) {
        return false
    }

    const sourceTxId = linearProof.getSourcetxid()
    const targetTxId = linearProof.getTargettxid()
    const termsList = linearProof.getTermsList_asU8()

    if (sourceId !== sourceTxId || targetId !== targetTxId) {
        return false
    }

    if (sourceTxId === 0 || sourceTxId > targetTxId || termsList.length === 0 || sourceAlh !== termsList[0]) {
        return false
    }

    let calculatedAlh = termsList[0]

    for (let i = 0; i < termsList.length; i++) {
        const bs = new Uint8Array()

        bs.set(new Uint8Array(linearProof.getSourcetxid()+i))
        bs.set(calculatedAlh, 1)
        bs.set(termsList[i], 2)

        calculatedAlh = hashUint8Array(bs)
    }

    return targetAlh === calculatedAlh
}

export default HTree