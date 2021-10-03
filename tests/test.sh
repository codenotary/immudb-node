#!/bin/bash

# cd to test directory
cd "$(dirname "$0")"

# allow using dotenv variables (from prev directory)
eval $(cat ../.env | sed 's/^/export /')

DEV=false
LAST_IMMUDB_VERSION=v1.1.0

for arg in "$@"
do
  case $arg in
    -d|--dev)
    DEV=true
    shift # Remove --dev from processing
    ;;
  esac
done

echo "dev mode is: "$DEV""

if [ "$DEV" == true ]; then
  echo "+++++++++++++++++++++++"
  echo "Running in DEV mode"
  echo "+++++++++++++++++++++++"
  echo ""

  echo "Stopping dev immudb..."
  npx kill-port $IMMUDB_TEST_PORT

  pushd $IMMUDB_DEV_PATH

  # check dev immudb
  echo "immudb version running:"
  ./immudb version

  # start dev immudb
  echo "Starting dev immudb..."
  ./immudb -d -a $IMMUDB_HOST -p $IMMUDB_TEST_PORT --dir ./test-data > /dev/null 2>&1
  popd

  # Run tests
  (cd .. ; ./node_modules/tap/bin/run.js)

  pushd $IMMUDB_DEV_PATH
    # Clean up
    rm -rf test-data
  popd

  rm -rf roots root.json ../root root

  # Stop immudb
  npx kill-port $IMMUDB_TEST_PORT
fi

if [ "$DEV" == false ]; then
  echo "+++++++++++++++++++++++"
  echo "Running DEFAULT mode"
  echo "+++++++++++++++++++++++"
  echo ""

  if [ ! -e immudb ]
  then
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
      echo "Downloading 'linux-gnu' immudb version..."
      URL=https://github.com/codenotary/immudb/releases/download/$LAST_IMMUDB_VERSION/immudb-$LAST_IMMUDB_VERSION-linux-amd64
      wget -O immudb $URL
    elif [[ "$OSTYPE" == "darwin"* ]]; then
      echo "Downloading 'darwin' immudb version..."
      URL=https://github.com/codenotary/immudb/releases/download/$LAST_IMMUDB_VERSION/immudb-$LAST_IMMUDB_VERSION-darwin-amd64
      curl -o immudb -L $URL
    fi

    chmod +x immudb

    echo "Downloaded"
  fi
  
  echo "immudb version running:"
  ./immudb version

  echo "Starting immudb..."
  ./immudb -d -a $IMMUDB_HOST -p $IMMUDB_TEST_PORT --dir ./test-data > /dev/null 2>&1

  # Run tests
  (cd .. ; ./node_modules/tap/bin/run.js)

  # Clean up
  # rm -rf test-data roots root.json ../root root immudb

  # Stop immudb
  npx kill-port $IMMUDB_TEST_PORT
fi
