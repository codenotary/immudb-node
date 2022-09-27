[immudb-node](../README.md) / [Exports](../modules.md) / grpc-promis/createDeffered

# Module: grpc-promis/createDeffered

## Table of contents

### Functions

- [createDeffered](grpc_promis_createDeffered.md#createdeffered)

## Functions

### createDeffered

▸ **createDeffered**<`TResult`\>(): `Object`

Creates promise that can be resolved/rejected externally.

```ts

const run = async () => {
    const resultOfCallback = createDeffered<number>()
    readNumberOfLines({
        filename: 'some_file.md',
        callback: (err, buf) => {
            if (err) {
                resultOfCallback.emitReject(err)
            }
            else {
                resultOfCallback.emitResolve(buf.length)
            }
        }
    })
    return await resultOfCallback.promise
}

run()
.then(res => console.log('Successfully read lines:', res))
.catch(err => console.log('Error reading lines:', err))
//
```

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `emitReject` | (`err`: `any`) => `void` |
| `emitResolve` | (`res`: `TResult`) => `void` |
| `promise` | `Promise`<`TResult`\> |
| `state` | () => ``"pending"`` \| ``"fulfilled"`` \| ``"rejected"`` |

#### Defined in

[immudb-node/src/grpc-promis/createDeffered.ts:32](https://github.com/user3232/node-immu-db/blob/30c0d74/immudb-node/src/grpc-promis/createDeffered.ts#L32)
