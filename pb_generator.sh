set -e
set -x

SRC_PATH=protos
DEST_PATH=$SRC_PATH/build

# remove the dest directory
if [ -d "$DEST_PATH" ]; then rm -Rf $DEST_PATH; fi

# recreate dest directory
mkdir $DEST_PATH

# generate js codes via grpc_tools_node_protoc[CommonJS imports]
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./$DEST_PATH \
  --grpc_out=grpc_js:./$DEST_PATH \
  -I=./protos ./$SRC_PATH/*.proto