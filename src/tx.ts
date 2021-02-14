import HTree from './htree';
import Util, { encodeInt32, encodeInt64, hashUint8Array, utf8Encode } from './util';
import * as messages from './proto/schema_pb';

const util = new Util()
class TXe {
    public hValue: Uint8Array
    public vOff: number
    public valueLen: number
    public key: Uint8Array
    public keyLen: number

    constructor(hValue: Uint8Array, vOff: number, valueLen: number, key: Uint8Array) {
        this.hValue = hValue
        this.vOff = vOff
        this.valueLen = valueLen
        this.key = key
        this.keyLen = key.length
    }
}

const digestTXe = ({ key, hValue }: TXe) => {
    const b = new Uint8Array(key.length + hValue.length)

    b.set(key)
    b.set(hValue, key.length)

    return hashUint8Array(b)
}

class Tx {
    public id: number
    public entries: Array<TXe>
    public nEntries: number
    public htree: HTree
    public prevAlh: Uint8Array
    public ts: number
    public blTxId: number
    public blRoot: Uint8Array
    public innerHash: Uint8Array
    public alh: Uint8Array

    constructor(entries: Array<TXe>, id = 0, prevAlh: Uint8Array, ts: number, blTxId: number, blRoot: Uint8Array) {
        this.entries = entries
        this.nEntries = entries.length
        this.htree = new HTree(this.nEntries)
        this.id = id
        this.prevAlh = prevAlh
        this.ts = ts
        this.blTxId = blTxId
        this.blRoot = blRoot
        
        this.buildHashTree()
        
        this.innerHash = this.calcInnerHash()
        this.alh = this.calcAlh()
    }

    private buildHashTree() {
        const digests = []
        
        for (let e of this.entries) {
            digests.push(digestTXe(e))
        }
        
        this.htree.buildWith(digests)
    }

    private calcAlh() {
        const encodedId = encodeInt64(this.id)
        const bi = new Uint8Array(encodedId.length + this.prevAlh.length + this.innerHash.length)

        bi.set(encodedId)
        bi.set(this.prevAlh)
        bi.set(this.innerHash)

        return hashUint8Array(bi)
    }

    private calcInnerHash() {
        const encTs = encodeInt64(this.ts)
        const encNEntries = encodeInt32(this.nEntries)
        const encBlTxId = encodeInt64(this.blTxId)
        const bj = new Uint8Array(encTs.length + encNEntries.length + this.htree.root.length + encBlTxId.length + this.blRoot.length)

        bj.set(encTs)
        bj.set(encNEntries, encTs.length)
        bj.set(this.htree.root, encTs.length + encNEntries.length)
        bj.set(encBlTxId, encTs.length + encNEntries.length + this.htree.root.length)
        bj.set(this.blRoot, encTs.length + encNEntries.length + this.htree.root.length + encBlTxId.length)

        return hashUint8Array(bj)
    }
}

const newTx = (entries: Array<TXe>, id: number, prevAlh: Uint8Array, ts: number, blTxId: number, blRoot: Uint8Array) => {
    return new Tx(entries, id, prevAlh, ts, blTxId, blRoot)
}

export const txFrom = (sTx: messages.Tx) => {
    const sTxMetadata = sTx.getMetadata()

    if (sTxMetadata === undefined) {
        throw new Error('Corrupted txFrom parameters')
    }
    
    let entries: Array<TXe> = []
    
    for (let e of sTx.getEntriesList()) {
        const i = new TXe(e.getHvalue_asU8(), e.getVoff(), e.getVlen(), e.getKey_asU8())

        entries.push(i)
    }

    const sTxId = sTxMetadata.getId()
    const sTxPrevalh = sTxMetadata.getPrevalh_asU8()
    const sTxTs = sTxMetadata.getTs()
    const sTxBlTxId = sTxMetadata.getBltxid()
    const sTxBlRoot = sTxMetadata.getBlroot_asU8()

    return newTx(entries, sTxId, sTxPrevalh, sTxTs, sTxBlTxId, sTxBlRoot)
}

export const proofTx = (tx: Tx, key: Uint8Array) => {
    let kindex

    for (let [k, v] of tx.entries.entries()) {
        if (util.equalArray(v.key, key)) {
            kindex = k
        }
    }

    if (kindex === undefined) {
        console.error('Error finding kindex')
    } else {
        return tx.htree.inclusionProof(kindex)
    }
}
