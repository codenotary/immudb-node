#!/bin/bash

set -e
set -x

SRC_PATH=proto
DEST_PATH=src/proto

# remove the dest directory
if [ -d "$DEST_PATH" ]; then rm -Rf $DEST_PATH; fi

# recreate dest directory
mkdir $DEST_PATH

# if [[ "$GOBIN" == "" ]]; then
#   if [[ "$GOPATH" == "" ]]; then
#     echo "Required env var GOPATH is not set; aborting with error; see the following documentation which can be invoked via the 'go help gopath' command."
#     go help gopath
#     exit -1
#   fi

#   echo "Optional env var GOBIN is not set; using default derived from GOPATH as: \"$GOPATH/bin\""
#   export GOBIN="$GOPATH/bin"
# fi

PROTOC=`command -v protoc`
if [[ "$PROTOC" == "" ]]; then
  echo "Required "protoc" to be installed. Please visit https://github.com/protocolbuffers/protobuf/releases (3.5.0 suggested)."
  exit -1
fi

# Install protoc-gen-go from the vendored protobuf package to $GOBIN
# (cd ../../vendor/github.com/golang/protobuf && make install)

echo "Compiling protobuf definitions"
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I=./proto ./$SRC_PATH/*.proto
  --js_out=import_style=commonjs,binary:./$DEST_PATH \
  --ts_out=service=grpc-web:./$DEST_PATH \
  ./proto/schema.proto
