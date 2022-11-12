# nodejs-raccoonizer

`Raccoonizer` provides library of Node.js frameworks extentions to simplify microservices 
deployments.

```typescript
import { KoaMicroservice } from '@raccoons-co/nodejs-raccoonizer';
import Koa from "koa";
import assert from 'node:assert/strict';

class MyKoa extends KoaMicroservice {
    protected initConfiguration(){
        this.instance()
            .use(async ( ctx: Koa.Context ) => { ctx.body = "My Koa is here"; } );
    }
}

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );
    new MyKoa( atPort ).deploy();
} catch( exception ) {
    console.log( exception );
}
```
See `src/test/EntryPoint.ts`.