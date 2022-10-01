import type * as immu from '../types/index.js'
import * as hash from '../immu-hash/index.js'
import * as prove from '../immu-rfc6962/index.js'



export function verifyTx(props: immu.VerificationTx): true {
    switch(props.type) {
        case 'tx-prev-in-ref-prev': return txInRefTx(props)
        case 'ref-prev-in-tx-prev': return refTxInTx(props)
        case 'tx-is-ref':           return txIsRefTx(props)
    }
}

export function txInRefTx(props: immu.VerificationTxInclusion): true {

    if(props.tx.id.greaterThanOrEqual(props.refHash.id)) {
        throw 'proof must be for txInRefTx'
    }

    // ************************************************
    // Ref tx hash matches proof ref tx hash
    // ************************************************

    const refTxHash = hash.hashOfTxCore(props.ref)

    if (refTxHash.equals(props.refHash.txHash) === false) {
        throw 'computed ref hash must match refHash.txHash'
    }

    // ************************************************
    // Tx in Ref prev txes Mht
    // ************************************************

    const txHash = hash.hashOfTxCore(props.tx)
    const txHashLeaf = hash.leaf(txHash)

    const refPrevTxesMhtFromTx = prove.rootFromInclusionProof({
        leaf:                   txHashLeaf,
        leafId:                 props.tx.id,
        lastLeafId:             props.refHash.id.sub(1),
        inclusionProofNodes:    props.txPrevInRefPrevTxesMht
    })

    if (refPrevTxesMhtFromTx.equals(props.ref.prevTxesMht) === false) {
        throw 'proved refPrevTxesMhtFromtx must match ref.prevTxesMht'
    }

    // ************************************************
    // Ref prev tx in Ref prev txes Mht
    // ************************************************

    const refPrevTxHashLeaf = hash.leaf(props.ref.prevTxHash)

    const refPrevTxesMhtFromRefPrevTx = prove.rootFromInclusionProof({
        leaf:                   refPrevTxHashLeaf,
        leafId:                 props.ref.id.sub(1),
        lastLeafId:             props.ref.id.sub(1),
        inclusionProofNodes:    props.refPrevTxInRefPrevTxesMht
    })

    if (refPrevTxesMhtFromRefPrevTx.equals(props.ref.prevTxesMht) === false) {
        throw 'proved refPrevTxesMhtFromRefPrevTx must match ref.prevTxesMht'
    }

    

    return true as const
}



export function refTxInTx(props: immu.VerificationTxIsExtending): true {

    if(props.refHash.id.greaterThanOrEqual(props.tx.id)) {
        throw 'proof must be for refTxInTx'
    }
    

    // ************************************************
    // Ref tx hash matches proof ref tx hash
    // ************************************************


    const refTxHash = hash.hashOfTxCore(props.ref)

    if (refTxHash.equals(props.refHash.txHash) === false) {
        throw 'computed ref must match refHash.txHash'
    }


    // ************************************************
    // Ref prev tx in:
    //   Ref prev txes Mht 
    //   and Tx prev txes Mht
    // ************************************************

    if(props.ref.id.isEven()) {
        if (
            hash.leaf(props.ref.prevTxHash)
            .equals(props.refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht[0]) 
            === false
        ) {
            throw 'hash.leaf(props.ref.prevTxHash) must match refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht[0]'
        }
    }


    const {
        sourceRoot: refPrevTxesMht,
        targetRoot: txPrevTexsMht,
    } = prove.rootsFromConsistencyProof({
        sourceSize: props.refHash.id.sub(1),
        targetSize: props.tx.id.sub(1),
        proofNodes: props.refPrevTxInRefPrevTxesMhtAndTxPrevTxesMht
    })
    

    if (refPrevTxesMht.equals(props.ref.prevTxesMht) === false) {
        throw 'refPrevTxesMht must match ref.prevTxesMht'
    }
    if (txPrevTexsMht.equals(props.tx.prevTxesMht) === false) {
        throw 'txPrevTexsMht must match tx.prevTxesMht'
    }


    // ************************************************
    // Tx prev tx in: Tx prev txes
    // ************************************************

    const txPrevTxHashLeaf = hash.leaf(props.tx.prevTxHash)

    const txPrevTxesMhtFromTxPrevTx = prove.rootFromLastLeafInclusionProof({
        lastLeaf:                       txPrevTxHashLeaf,
        lastLeafId:                     props.tx.id.sub(1),
        lastLeafInclusionProofNodes:    props.txPrevTxInTxPrevTxesMht
    })

    if (txPrevTxesMhtFromTxPrevTx.equals(props.tx.prevTxesMht) === false) {
        throw 'proved txPrevTxesMhtFromTxPrevTx must match tx.prevTxesMht'
    }
    
    

    return true as const
}



export function txIsRefTx(props: immu.VerificationTxEquality): true {

    if(props.tx.id.notEquals(props.refHash.id)) {
        throw 'proof must be for txIsRefTx'
    }


    // ************************************************
    // Ref tx hash matches proof ref tx hash
    // ************************************************

    const entryAndRefTxHash = hash.hashOfTxCore(props.tx)

    if (entryAndRefTxHash.equals(props.refHash.txHash) === false) {
        throw 'computed entryAndRefTxHash must match refHash.txHash'
    }

    
    // ************************************************
    // Tx and Ref prev tx in Tx and Ref prev txes Mht
    // ************************************************

    const entryAndRefPrevTxHashLeaf = hash.leaf(props.tx.prevTxHash)

    const entryAndRefPrevTxesMhtFromEntryAndRefPrevTx = prove.rootFromLastLeafInclusionProof({
        lastLeaf:                       entryAndRefPrevTxHashLeaf,
        lastLeafId:                     props.refHash.id.sub(1),
        lastLeafInclusionProofNodes:    props.txPrevTxInRefPrevTxesMht
    })

    

    if (
        entryAndRefPrevTxesMhtFromEntryAndRefPrevTx
        .equals(props.tx.prevTxesMht) 
        === false
    ) {
        throw 'proved entryAndRefPrevTxesMhtFromEntryAndRefPrevTx must match tx.prevTxesMht'
    }

    

    return true as const
}

