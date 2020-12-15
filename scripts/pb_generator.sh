#!/bin/bash

set -e
set -x

SRC_PATH=proto
DEST_PATH=src/proto

# remove the dest directory
if [ -d "$DEST_PATH" ]; then rm -Rf $DEST_PATH; fi

# recreate dest directory
mkdir $DEST_PATH

# generate js codes via grpc_tools_node_protoc[CommonJS imports]
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./$DEST_PATH \
    --grpc_out=grpc_js:./$DEST_PATH \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I=./proto ./$SRC_PATH/*.proto

# generate ts codes via grpc_tools_node_protoc[CommonJS imports]
grpc_tools_node_protoc \
    --ts_out=$DEST_PATH \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    -I ./proto \
    -I=./proto ./$SRC_PATH/*.proto