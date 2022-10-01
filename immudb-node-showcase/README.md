
# immudb showcases

In `src` folder there are self sufficient files with immudb showcases.
Use them to play and learn immudb.


## Running schowcases

First clone repository. Then `cd` to showcase module and install dependencies:

```sh
cd immudb-node-showcase
npm install
```


Then run immudb docker image with exposed ports:

```sh
docker run -d -it --rm -p 8080:8080 -p 3322:3322 -p 9497:9497 -p 5432:5432 --name immudb codenotary/immudb:1.3.2
```

Then run example, e.g.:

```sh
npx ts-node --esm .\src\scanning.ts
```

To have predictable output it is best to restart immudb docker image 
before every showcase run.

## Create your own showcase and experiment


Create your file in `immu-node-showcase` module folder:

```sh
cd immu-node-showcase
code 'src/my-showcase.ts'
```

Import client and implement your showcase:

```ts
import { Client } from 'immudb-node'

myShowcase()
.catch(console.error)
function myShowcase() {

    const defaultClient = new Client({
        host:       '127.0.0.1',
        port:       3322,
        user:       'immudb',
        password:   'immudb',
        database:   'defaultdb',
    })

    // ... code
    console.log('Log something')


    await defaultClient.close()
}
```

Remember to have your immudb instance running:

```sh
docker run -d -it --rm -p 8080:8080 -p 3322:3322 -p 9497:9497 -p 5432:5432 --name immudb codenotary/immudb:1.3.2
```


Run your showcase:

```sh
npx ts-node --esm './src/my-showcase.ts'
```
