set -e
set -x

./node_modules/grpc-tools/bin/protoc.js \
  --proto_path=proto \
  --proto_path=./node_modules/protobufjs \
  --js_out=import_style=commonjs,binary:proto \
  --plugin==protc-gen-grpc=./node_modules/grpc-tools/bin/grpc_node_plugin \
  --grpc_out=import_style=commonjs,binary:proto \
  proto/schema.proto \
  node_modules/protobufjs/google/**/*.proto
