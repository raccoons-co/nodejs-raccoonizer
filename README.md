# nodejs-raccoonizer

`Raccoonizer` provides library of Node.js frameworks extentions to simplify microservices 
deployments.

`MyKoa.ts:`
```typescript
import { KoaMicroservice } from '@raccoons-co/nodejs-raccoonizer';
import Koa from "koa";

export default class MyKoa 
  extends KoaMicroservice {

  protected initConfiguration(){
    this.instance()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "MyKoa is here"; } );
    }
}
```
`EntryPoint.ts:`
```typescript
import MyKoa from './MyKoa';
import assert from 'node:assert/strict';

try {
  assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
  const atPort = Number( process.env.PORT );
  new MyKoa( atPort ).deploy();
} catch( exception ) {
  console.log( exception );
}

```
`package.json:`
```
"scripts": {
  "build": "tsc",
  "start": "npm run build && npm run this.raccoonizer.microservice"
  "this.raccoonizer.microservice": "node dist/EntryPoint",
}
```