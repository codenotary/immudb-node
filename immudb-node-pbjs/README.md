
# Generate protobufjs client for immudb `.proto` file



## Prepare `schema.proto` after updates


It may be neccessery to repair synthax errors in actualized `.proto` file.


Following lines should be commented:
- `import "google/api/annotations.proto";`
- `import "protoc-gen-swagger/options/annotations.proto";`


Also:
- `;` semicolon after `title: "immudb REST API";` should be removed
- `;` semicolon after `info: { ... };` should be removed



## Generate static code

To generate static protobuf code in file `src/main.js`:

```ps1
npx pbjs --target static-module --force-long --es6 --wrap es6 --out src/main.js schema.proto
```

**To use as a module and generate typedefinitions** change second line on `src/main.js` to:

```ts
import $protobuf from "protobufjs/minimal.js";
```



## Generate typescript definitions

To generate typescript type definitions in file `src/main.d.ts`:


```ps1
npx pbts --out src/main.d.ts src/main.js
```


Alternatively (sometimes this works):

```ps1
npx pbjs --target static-module --force-long --es6 --wrap es6 schema.proto | npx pbts -o src/main.d.ts -
```



