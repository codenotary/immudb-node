



/**
 * Creates promise that can be resolved/rejected externally.
 * 
 * ```ts
 * 
 * const run = async () => {
 *     const resultOfCallback = createDeffered<number>()
 *     readNumberOfLines({
 *         filename: 'some_file.md',
 *         callback: (err, buf) => {
 *             if (err) {
 *                 resultOfCallback.emitReject(err)
 *             }
 *             else {
 *                 resultOfCallback.emitResolve(buf.length)
 *             }
 *         }
 *     })
 *     return await resultOfCallback.promise
 * }
 * 
 * run()
 * .then(res => console.log('Successfully read lines:', res))
 * .catch(err => console.log('Error reading lines:', err))
 * //
 * ```
 */
export function createDeffered<TResult>() {

    const emitter: {
        state: 
            | {type: 'fulfilled', res: TResult} 
            | {type: 'rejected', err: any} 
            | {type: 'pending'},
        onResolve?: (res: TResult) => void,
        onReject?:  (err: any) => void
    } = {
        state: {type: 'pending'}
    }

    const promise = new Promise<TResult>((resolve, reject) => {

        switch (emitter.state.type) {
            case 'pending': break
            case 'fulfilled': return resolve(emitter.state.res)
            case 'rejected': return reject(emitter.state.err)
        }

        emitter.onResolve = (res: TResult) => {
            resolve(res)
        }
        emitter.onReject = (err: any) => {
            reject(err)
        }
    })
    

    return {
        promise,
        emitResolve: (res: TResult) => { 
            if (emitter.state.type !== 'pending') {
                return
            }
            emitter.state = {
                type: 'fulfilled',
                res: res,
            }
            emitter.onResolve?.(res) 
        },
        emitReject: (err: any) => { 
            if (emitter.state.type !== 'pending') {
                return
            }
            emitter.state = {
                type: 'rejected',
                err: err,
            }
            emitter.onReject?.(err) 
        },
        state: () => emitter.state.type
    }
    
}