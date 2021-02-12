import * as messages from './proto/schema_pb';
declare class HTree {
    levels: Array<Array<Uint8Array>>;
    maxWidth: number;
    width: number;
    root: Uint8Array;
    constructor(maxWidth: number);
    buildWith(digests: Array<Uint8Array>): void;
    inclusionProof(i: number): messages.InclusionProof | undefined;
}
export declare const inclusionProofFrom: ({ leaf, width, termsList }: messages.InclusionProof.AsObject) => messages.InclusionProof;
export declare const dualProofFrom: ({ sourcetxmetadata, targettxmetadata, inclusionproofList, consistencyproofList, targetbltxalh, lastinclusionproofList, linearproof }: messages.DualProof.AsObject) => messages.DualProof;
export declare const verifyInclusion: (proof: messages.InclusionProof, digest: messages.KeyValue, root: Uint8Array) => boolean;
export declare const verifyDualProof: (dualProof: messages.DualProof, sourceId: number, targetId: number, sourceAlh: Uint8Array, targetAlh: Uint8Array) => boolean;
export default HTree;
