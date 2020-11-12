#!/bin/bash

cd "$(dirname "$0")"

if [ ! -e immudb ]
then
  if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "Downloading 'linux-gnu' immudb version..."
    URL=https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-linux-amd64
    wget -O immudb $URL
  elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Downloading 'darwin' immudb version..."
    URL=https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-darwin-amd64
    curl -o immudb -L $URL
  fi

  chmod +x immudb

  echo "Downloaded"
fi

echo "Starting immudb..."

./immudb -d -a 127.0.0.1 -p 56789 > /dev/null 2>&1

# Run tests
(cd .. ; ./node_modules/tap/bin/run.js)

# Stop immudb
kill -9 $(lsof -ti:56789)

# Clean up
rm -rf data
rm -rf roots
