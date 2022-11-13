# nodejs-raccoonizer

`Raccoonizer` provides library of Node.js frameworks extentions to unify microservices 
deployments.

`Implement YourKoaConfiguration.ts:`
```typescript
import { NodejsFrameworkConfiguration } from "@raccoons-co/nodejs-raccoonizer";
import Koa from "koa";

export default class YourKoaConfiguration implements NodejsFrameworkConfiguration<Koa> {
  applyTo( koaInstance: Koa ): void {
    koaInstance
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}
```
`EntryPoint.ts:`
```typescript
import { Microservice, KoaMicroservice } from "@raccoons-co/nodejs-raccoonizer";
import YourKoaConfiguration from "./YourKoaConfiguration";
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );
    new KoaMicroservice( atPort, new YourKoaConfiguration() ).deploy();
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