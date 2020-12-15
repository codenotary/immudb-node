declare class Root {
    root: any;
    rootPath: any;
    constructor();
    set(params: any): void;
    get(params: any): {
        index: any;
        root: any;
    };
    setRootPath(params: any): void;
    commit(): void;
    exitHandler(): void;
}
export default Root;
