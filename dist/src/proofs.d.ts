import Util from './util';
import * as messages from './proto/schema_pb';
interface ErrVerificationException {
    clientErr: string;
    meta?: number;
}
declare class Proof {
    util: Util;
    leafPrefix: number[];
    nodePrefix: number[];
    sha256Size: number;
    errVerificationException: ErrVerificationException;
    constructor();
    verify(params: any, callback: any): any;
    setKey(params: any): Uint8Array;
    _digest(params: any): Uint8Array;
    verifyInclusion(params: any, callback: any): any;
    verifyConsistency(params: any, callback: any): any;
    inclusionProofFrom(inclusionProof: messages.InclusionProof): void;
    dualProofFrom(dualProof: messages.DualProof): void;
}
export default Proof;
