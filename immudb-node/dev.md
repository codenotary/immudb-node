# Configure .git repo user and email

https://support.atlassian.com/bitbucket-cloud/docs/configure-your-dvcs-username-for-commits/



# Configuration as Node module

https://www.devextent.com/import-es-modules-in-nodejs-with-typescript-and-babel/


# Running

First run immudb docker image with exposed ports:

```sh
docker run -d -it --rm -p 8080:8080 -p 3322:3322 -p 9497:9497 -p 5432:5432 --name immudb codenotary/immudb:latest
```

Then install node dependencies, and run example.

```sh
npm install
npm run build && node ./dist/src/index.js
```

# Optional code generation

## Getting `.proto` file of immudb

First get code of immudb submodule:

```sh
git submodule --init
```

then copy latest proto file using powershell:

```ps1
Copy-Item .\immudb\pkg\api\schema\schema.proto -Destination .\proto
```

or bash:

```sh
cp ./immudb/pkg/api/schema/schema.proto -Destination ./proto
```


Now repair synthax errors in copied `.proto` file.


Following lines should be commented:
- `import "google/api/annotations.proto";`
- `import "protoc-gen-swagger/options/annotations.proto";`


Also:
- `;` semicolon after `title: "immudb REST API";` should be removed
- `;` semicolon after `info: { ... };` should be removed


## Generate grpc code


To generate code and types in `src/proto` directory:

```sh
npx proto-loader-gen-types \
    --longs=Long \
    --enums=String \
    --bytes=Buffer \
    --defaults \
    --arrays \
    --objects \
    --oneofs \
    --json \
    --grpcLib=@grpc/grpc-js \
    --outDir=src/proto/ \
    proto/schema.proto
```

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
    --outDir=src/proto/ `
    proto/schema.proto
```

## Generate protobuf code

To generate static protobuf code in file `pb/immu.js`:

```ps1
npx pbjs --target static-module --force-long --es6 --wrap es6 --out pb/immu.js proto/schema.proto
```

**To use as a module and generate typedefinitions** change second line on `pb/immu.js` to:

```ts
import $protobuf from "protobufjs";
```

To generate typescript type definitions in file `pb/immu.d.ts`:

```ps1
npx pbjs --target static-module --force-long --es6 --wrap es6 proto/schema.proto | npx pbts -o pb/immu.d.ts -
```

