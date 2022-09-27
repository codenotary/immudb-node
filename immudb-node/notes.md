
# Node module package

https://www.devextent.com/import-es-modules-in-nodejs-with-typescript-and-babel/

# Generate type definitions from `.proto` file

To reference actual `schema.proto` file:

```ps1
# add git repository containing .proto files as submodule
# to this git repository
git submodule add https://github.com/codenotary/immudb.git
# create directory for .proto files
New-Item -Path . -Name proto -ItemType Directory
# create symbolic link in created directory
# (will not work, .proto file must be edited!)
# 
# New-Item -Path .\proto\immudb.proto -ItemType SymbolicLink -Target .\immudb\pkg\api\schema\schema.proto
# if symlinks does not work for some reason, copy file
Copy-Item .\immudb\pkg\api\schema\schema.proto -Destination .\proto
```

(windows developer mode turned on is needed for creating symlinks 
without elevated shell.)


`schema.proto` file uses some imports needed only for go server implementation,
change lines in referenced file in following way:

```proto

// top things ....

// imports from google/api/... and protoc-gen-swagger/options/...
// needs to be removed

import "google/api/annotations.proto";
import "google/protobuf/empty.proto";
import "protoc-gen-swagger/options/annotations.proto";
import "google/protobuf/struct.proto";

// things ....


// following not parsess well, remove unneccessary semicolons (;)
// after title and info block
option (grpc.gateway.protoc_gen_swagger.options.openapiv2_swagger) = {
	info: {
		title: "immudb REST API"; // <- remove ;
		description: "<b>IMPORTANT</b>: All <code>get</code> and <code>safeget</code> functions return <u>base64-encoded</u> keys and values, while all <code>set</code> and <code>safeset</code> functions expect <u>base64-encoded</u> inputs."
	}; // <- remove ;
	security_definitions: {
		security: {
			key: "bearer"
			value: {
				type: TYPE_API_KEY
				in: IN_HEADER
				name: "Authorization"
				description: "Authentication token, prefixed by Bearer: Bearer <token>"
			}
		}
	}
	security: {
		security_requirement: {
			key: "bearer"
		}
	}
};

// rest ...
```

resulting `schema.proto` should have changed fragments in following way:

```proto
// top things ....


// import "google/api/annotations.proto";
import "google/protobuf/empty.proto";
// import "protoc-gen-swagger/options/annotations.proto";
import "google/protobuf/struct.proto";

// things ....

option (grpc.gateway.protoc_gen_swagger.options.openapiv2_swagger) = {
	info: {
		title: "immudb REST API"
		description: "<b>IMPORTANT</b>: All <code>get</code> and <code>safeget</code> functions return <u>base64-encoded</u> keys and values, while all <code>set</code> and <code>safeset</code> functions expect <u>base64-encoded</u> inputs."
	}
	security_definitions: {
		security: {
			key: "bearer"
			value: {
				type: TYPE_API_KEY
				in: IN_HEADER
				name: "Authorization"
				description: "Authentication token, prefixed by Bearer: Bearer <token>"
			}
		}
	}
	security: {
		security_requirement: {
			key: "bearer"
		}
	}
};

// rest ...
```

Now generate code and types in `src/proto` directory:

```ps1
npx proto-loader-gen-types proto/schema.proto `
    --longs=Long `
    --enums=String `
    --bytes=Buffer `
    --defaults=true `
    --arrays=true `
    --objects=true `
    --oneofs=true `
    --json=true `
    --includeComments=true `
    --grpcLib=@grpc/grpc-js `
    --outDir=src/proto/
```


# Run database engine


Adressess:
- grpc api: `0.0.0.0:3322`
- metrics: `0.0.0.0:9497/metrics`
- pgsql server: `0.0.0.0:5432`
- Webconsole: `0.0.0.0:8080`
- http api: `0.0.0.0:8080/api`

Running immudb with exposed ports:

```ps1
docker run -d -it --rm -p 8080:8080 -p 3322:3322 -p 9497:9497 -p 5432:5432 --name immudb codenotary/immudb:latest
```


Running immudb server command from immudb documentations:

```ps1
docker run -d --net host -it --rm --name immudb codenotary/immudb:latest
```

Example docker attach logs:

```
immudb 1.3.0
Commit  : ce57d20a946c5a1ac5ec4b0be8c262f41527026d
Built at: Mon, 23 May 2022 14:05:55 UTC
Static  : true
================ Config ================
Data dir         : /var/lib/immudb
Address          : 0.0.0.0:3322
Metrics address  : 0.0.0.0:9497/metrics
Config file      : configs/immudb.toml
Max recv msg size: 33554432
Auth enabled     : true
Dev mode         : true
Default database : defaultdb
Maintenance mode : false
Synced mode      : true
----------------------------------------
Superadmin default credentials
   Username      : immudb
   Password      : immudb
========================================

immudb  2022/06/12 21:28:43 INFO: Creating database 'systemdb' {replica = false}...
immudb  2022/06/12 21:28:43 INFO: Index '/var/lib/immudb/systemdb/index' {ts=0, discarded_snapshots=0} successfully loaded
immudb  2022/06/12 21:28:43 INFO: Indexing in progress at '/var/lib/immudb/systemdb'
immudb  2022/06/12 21:28:43 INFO: Binary Linking up to date at '/var/lib/immudb/systemdb'
immudb  2022/06/12 21:28:43 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=0, cleanup_percentage=0.00/0.00, since_cleanup=0} requested via SnapshotSince...
immudb  2022/06/12 21:28:43 INFO: Index '/var/lib/immudb/systemdb/index' {ts=0, cleanup_percentage=0.00/0.00} successfully flushed
immudb  2022/06/12 21:28:43 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=0} finished with: 1 inner nodes, 0 leaf nodes, 0 entries
immudb  2022/06/12 21:28:43 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=1, cleanup_percentage=0.00/0.00, since_cleanup=1} requested via SnapshotSince...
immudb  2022/06/12 21:28:43 INFO: Index '/var/lib/immudb/systemdb/index' {ts=1, cleanup_percentage=0.00/0.00} successfully flushed
immudb  2022/06/12 21:28:43 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=1} finished with: 1 inner nodes, 0 leaf nodes, 1 entries
immudb  2022/06/12 21:28:43 INFO: Database 'systemdb' successfully created {replica = false}
immudb  2022/06/12 21:28:43 INFO: Admin user 'immudb' successfully created
immudb  2022/06/12 21:28:43 INFO: Creating database 'defaultdb' {replica = false}...
immudb  2022/06/12 21:28:44 INFO: Index '/var/lib/immudb/defaultdb/index' {ts=0, discarded_snapshots=0} successfully loaded
immudb  2022/06/12 21:28:44 INFO: Indexing in progress at '/var/lib/immudb/defaultdb'
immudb  2022/06/12 21:28:44 INFO: Binary Linking up to date at '/var/lib/immudb/defaultdb'
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/defaultdb/index' {ts=0, cleanup_percentage=0.00/0.00, since_cleanup=0} requested via SnapshotSince...
immudb  2022/06/12 21:28:44 INFO: Index '/var/lib/immudb/defaultdb/index' {ts=0, cleanup_percentage=0.00/0.00} successfully flushed
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/defaultdb/index' {ts=0} finished with: 1 inner nodes, 0 leaf nodes, 0 entries
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/defaultdb/index' {ts=1, cleanup_percentage=0.00/0.00, since_cleanup=1} requested via SnapshotSince...
immudb  2022/06/12 21:28:44 INFO: Index '/var/lib/immudb/defaultdb/index' {ts=1, cleanup_percentage=0.00/0.00} successfully flushed
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/defaultdb/index' {ts=1} finished with: 1 inner nodes, 0 leaf nodes, 1 entries
immudb  2022/06/12 21:28:44 INFO: Database 'defaultdb' successfully created {replica = false}
immudb  2022/06/12 21:28:44 INFO: Started with an empty default database
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=2, cleanup_percentage=0.00/0.00, since_cleanup=2} requested via SnapshotSince...
immudb  2022/06/12 21:28:44 INFO: Index '/var/lib/immudb/systemdb/index' {ts=2, cleanup_percentage=0.00/0.00} successfully flushed
immudb  2022/06/12 21:28:44 INFO: Flushing index '/var/lib/immudb/systemdb/index' {ts=2} finished with: 1 inner nodes, 0 leaf nodes, 2 entries
immudb  2022/06/12 21:28:44 INFO: pgsql server is running at port 5432
immudb  2022/06/12 21:28:44 INFO: Webconsole enabled: 0.0.0.0:8080
immudb  2022/06/12 21:28:44 INFO: Web API server enabled on 0.0.0.0:8080/api (http)
You can now use immuadmin and immuclient CLIs to login with the immudb superadmin user and start using immudb.
```



# `@grpc/grps-js` Interceptors


| Name                      | Type                        | Argument   | Description                                         |
|---------------------------|-----------------------------|------------|-----------------------------------------------------|
| interceptors              |   grpc~Interceptor          |  optional  | Interceptors to apply to each request               |
| interceptor_providers     |   grpc~InterceptorProvider  |  optional  | Interceptor providers to apply interceptors to each |
|                           |                             |            | request depending on the method definition. At most |
|                           |                             |            | one of the interceptors and interceptor_providers   |
|                           |                             |            | options may be set.                                 |
| callInvocationTransformer |  grpc.Client                |  optional  |                                                     |
|                           |  ~callInvocationTransformer |            |                                                     |
| channelOverride           |  grpc.Channel               |            | Channel to use instead of constructing a new one.   |
|                           |                             |            | If set, the address, credentials, channel arguments |
|                           |                             |            | options, and channelFactoryOverride option will all |
|                           |                             |            | be ignored.                                         |
| channelFactoryOverride    |  grpc.Client~channelFactory |            | Function to use instead of the Channel constructor  |
|                           |                             |            | when creating the Client's channel                  |


Trivial example:

```js
var interceptor = function(options, nextCall) { 
    return new InterceptingCall(
        nextCall(options), 
        { 
            start: function(metadata, listener, next) { 
                next(
                    metadata, 
                    { 
                        onReceiveMetadata: function (metadata, next) { 
                            next(metadata); 
                        }, 
                        onReceiveMessage: function (message, next) { 
                            next(message); 
                        }, 
                        onReceiveStatus: function (status, next) { 
                            next(status); 
                        }, 
                    }
                ); 
            }, 
            sendMessage: function(message, next) { 
                next(message); 
            }, 
            halfClose: function(next) { 
                next(); 
            }, 
            cancel: function(message, next) { 
                next(); 
            } 
        }
    ); 
};
```

Simgle method interceptor:

```js
var interceptor = function(options, nextCall) { 
    return new InterceptingCall(
        nextCall(options), 
        { 
            sendMessage: function(message, next) {
                next(message); 
            } 
        }
    ); 
};
```

Interceptors are hooks for following method chain:

| Method                              | -> hook               |
|-------------------------------------|-----------------------|
| grpc.opType.SEND_INITIAL_METADATA   | -> start              |
| grpc.opType.SEND_MESSAGE            | -> sendMessage        |
| grpc.opType.SEND_CLOSE_FROM_CLIENT  | -> halfClose          |
| grpc.opType.RECV_INITIAL_METADATA   | -> onReceiveMetadata  |
| grpc.opType.RECV_MESSAGE            | -> onReceiveMessage   |
| grpc.opType.RECV_STATUS_ON_CLIENT   | -> onReceiveStatus    |



# git

`.gitconfig`

```ini
[merge]
  tool = code
[mergetool "code"]
  cmd = code --wait --merge $REMOTE $LOCAL $BASE $MERGED
```