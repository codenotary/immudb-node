import * as schemaTypes from './proto/schema_pb';

import { getAlh, hashUint8Array, encodeInt64, equalArray, withLeafPrefix } from './util'
import { NODE_PREFIX } from './consts'

const verifyInclusionAHT = (inclusionProofList: Array<Uint8Array>, i: number, j: number, iLeaf: Uint8Array, jRoot: Uint8Array): boolean => {
    if (i > j || i === 0 || i < j && inclusionProofList.length === 0) {
        return false
    }

    let i1 = i - 1
    let j1 = j - 1
    let ciRoot = iLeaf

    for (let h of inclusionProofList) {
        let b = new Uint8Array(NODE_PREFIX.length + ciRoot.length + h.length)

        b.set(NODE_PREFIX)

        if (i1 % 2 === 0 && i1 !== j1) {
            b.set(ciRoot, NODE_PREFIX.length)
            b.set(h, NODE_PREFIX.length + ciRoot.length)
        } else {
            b.set(h, NODE_PREFIX.length)
            b.set(ciRoot, NODE_PREFIX.length + h.length)
        }
        ciRoot = hashUint8Array(b)
        i1 = i1 >> 1
        j1 = j1 >> 1
    }

    console.log('jRoot', jRoot)
    console.log('ciRoot', ciRoot)
    return equalArray(jRoot, ciRoot)
}
const verifyConsistency = (consistencyProofList: Array<Uint8Array>, i: number, j: number, iRoot: Uint8Array, jRoot: Uint8Array): boolean => {
    if (i > j || i === 0 || (i < j && consistencyProofList.length === 0)) {
        return false
    }

    if (i === j && consistencyProofList.length === 0) {
        return equalArray(iRoot, jRoot)
    }

    let fn = i - 1
    let sn = j - 1

    while (fn % 2 === 1) {
        fn = fn >> 1
        sn = sn >> 1
    }

    let ciRoot = consistencyProofList[0]
    let cjRoot = consistencyProofList[0]

    for (let h of consistencyProofList.slice(1)) {
        if (fn % 2 === 1 || fn === sn) {
            let b = new Uint8Array(NODE_PREFIX.length + h.length + ciRoot.length)

            b.set(NODE_PREFIX)
            b.set(h, NODE_PREFIX.length)
            b.set(ciRoot, NODE_PREFIX.length + h.length)

            ciRoot = hashUint8Array(b)

            b = new Uint8Array(NODE_PREFIX.length + h.length + cjRoot.length)

            b.set(NODE_PREFIX)
            b.set(h, NODE_PREFIX.length)
            b.set(cjRoot, NODE_PREFIX.length + h.length)

            cjRoot = hashUint8Array(b)

            while (fn % 2 === 0 && fn !== 0) {
                fn = fn >> 1
                sn = sn >> 1
            }
        } else {
            let b = new Uint8Array(NODE_PREFIX.length + cjRoot.length + h.length)

            b.set(NODE_PREFIX)
            b.set(cjRoot, NODE_PREFIX.length)
            b.set(h, NODE_PREFIX.length + cjRoot.length)

            cjRoot = hashUint8Array(b)
        }

        fn = fn >> 1
        sn = sn >> 1
    }

    return equalArray(iRoot, ciRoot) && equalArray(jRoot, cjRoot)
}
const verifyLastInclusion = (lastInclusionproofList: Array<Uint8Array>, i: number, leaf: Uint8Array, root: Uint8Array): boolean => {
    if (i === 0) {
        return false
    }

    let i1 = i - 1
    let iRoot = leaf

    for (let h of lastInclusionproofList) {
        let b = new Uint8Array(NODE_PREFIX.length + h.length + iRoot.length)

        b.set(NODE_PREFIX)
        b.set(h, NODE_PREFIX.length)
        b.set(iRoot, NODE_PREFIX.length + h.length)

        iRoot = hashUint8Array(b)
        i1 = i1 >> 1
    }

    return equalArray(root, iRoot)
}
const verifyLinearProof = (linearProof: schemaTypes.LinearProof, sourceId: number, targetId: number, sourceAlh: Uint8Array, targetAlh: Uint8Array): boolean => {
    if (linearProof === undefined) {
        return false
    }

    const sourceTxId = linearProof.getSourcetxid()
    const targetTxId = linearProof.getTargettxid()
    const termsList = linearProof.getTermsList_asU8()

    if (sourceId !== sourceTxId || targetId !== targetTxId) {
        return false
    }

    if (sourceTxId === 0 || sourceTxId > targetTxId || termsList.length === 0 || !equalArray(sourceAlh, termsList[0])) {
        return false
    }

    let calculatedAlh = termsList[0]

    for (let i = 1; i < termsList.length; i++) {
        const txi = encodeInt64(linearProof.getSourcetxid()+i)
        const term = termsList[i]
        const bs = new Uint8Array(txi.length + calculatedAlh.length + term.length)

        bs.set(txi)
        bs.set(calculatedAlh, txi.length)
        bs.set(term, txi.length + calculatedAlh.length)

        calculatedAlh = hashUint8Array(bs)
    }

    return equalArray(targetAlh, calculatedAlh)
}

export const verifyInclusion = (proof: schemaTypes.InclusionProof, digest: Uint8Array, root: Uint8Array) => {
    if (proof === undefined) {
        return false
    }
    const leaf = withLeafPrefix(digest)

    let calcRoot = hashUint8Array(leaf)
    let i = proof.getLeaf()
    let r = proof.getWidth() - 1

    for (let t of proof.getTermsList_asU8()) {
        const b = new Uint8Array(NODE_PREFIX.length + t.length + calcRoot.length)

        b.set(NODE_PREFIX)

        if (i % 2 === 0 && i !== r) {
            b.set(calcRoot, NODE_PREFIX.length)
            b.set(t, NODE_PREFIX.length + calcRoot.length)
        } else {
            b.set(t, NODE_PREFIX.length)
            b.set(calcRoot, NODE_PREFIX.length + t.length)
        }
        calcRoot = hashUint8Array(b)
        i = Math.floor(i / 2)
        r = Math.floor(r / 2)
    }
    
    return i === r && equalArray(root, calcRoot)
}

export const verifyDualProof = (dualProof: schemaTypes.DualProof, sourceId: number, targetId: number, sourceAlh: Uint8Array, targetAlh: Uint8Array) => {
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
    const tPrevalh = getAlh(targettxmetadata)
    const tBltxid = targettxmetadata.getBltxid()
    const tBlroot = targettxmetadata.getBlroot_asU8()
    const sPrevalh = getAlh(sourcetxmetadata)
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
    if (!equalArray(sourceAlh, sPrevalh) || !equalArray(targetAlh, tPrevalh)) {
        return false
    }
    if (sourceId < tBltxid && verifyInclusionAHT(inclusionproofList, sourceId, tBltxid, withLeafPrefix(sourceAlh), tBlroot) === false) {
        return false
    }
    if (sBltxid > 0 && verifyConsistency(consistencyproofList, sBltxid, tBltxid, sBlroot, tBlroot) === false) {
        return false
    }
    if (tBltxid > 0 && verifyLastInclusion(lastinclusionproofList, tBltxid, hashUint8Array(withLeafPrefix(targetbltxalh)), tBlroot) === false) {
        return false
    }

    const linearproof = dualProof.getLinearproof()

    if (linearproof === undefined) {
        return false
    } else {
        let ret

        if (sourceId < tBltxid) {
            ret = verifyLinearProof(linearproof, tBltxid, targetId, targetbltxalh, targetAlh)
        } else {
            ret = verifyLinearProof(linearproof, sourceId, targetId, sourceAlh, targetAlh)
        }
    
        return ret
    }
}