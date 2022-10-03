

# Install & use

To include (alpha) client in your code, do:

```sh
npm install @codenotary/immudb-node@alpha
```

Then use (see detailed examples in [showcases](../immudb-node-showcase/)):

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

Remember to have immudb docker image with exposed ports running:

```sh
docker run -d -it --rm -p 8080:8080 -p 3322:3322 -p 9497:9497 -p 5432:5432 --name immudb codenotary/immudb:1.3.2
```


