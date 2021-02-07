import messages, { ImmutableState } from './proto/schema_pb';
declare class State {
    state: messages.ImmutableState;
    rootPath: any;
    constructor();
    set(params: ImmutableState.AsObject): void;
    get(): ImmutableState.AsObject;
    setRootPath(params: any): void;
    commit(): void;
    exitHandler(): void;
}
export default State;
