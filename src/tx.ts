import * as messages from './proto/schema_pb';

export const txFrom = (sTx: messages.Tx) => {
    let entries = []

    for (let e of sTx.getEntriesList()) {
        
    }
}
