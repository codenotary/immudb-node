# Generate grpcjs client for immudb `.proto` file


## Prepare `schema.proto` after updates


It may be neccessery to repair synthax errors in actualized `.proto` file.


Following lines should be commented:
- `import "google/api/annotations.proto";`
- `import "protoc-gen-swagger/options/annotations.proto";`


Also:
- `;` semicolon after `title: "immudb REST API";` should be removed
- `;` semicolon after `info: { ... };` should be removed


## Generate grpc client typescript code

```ps1
npx proto-loader-gen-types `
    --longs=Long `
    --enums=String `
    --bytes=Buffer `
    --defaults `
    --arrays `
    --objects `
    --oneofs `
    --json `
    --grpcLib=@grpc/grpc-js `
    --outDir=src `
    schema.proto
```

