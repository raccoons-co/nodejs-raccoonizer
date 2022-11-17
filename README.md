# nodejs-raccoonizer

Library of Node.js frameworks extensions to unify microservices 
deployments.

`Implement YourKoaConfiguration.ts:`
```typescript
import { KoaMicroserviceFactory, KoaFramework } from "@raccoons-co/nodejs-raccoonizer";
import Koa from "koa";

export default class YourKoaConfiguration
  extends KoaMicroserviceFactory {

  accept( koaFramework: KoaFramework ): void {
    koaFramework.application()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}
```
`EntryPoint.ts:`
```typescript
import { MicroserviceFactory } from "../main/index";
import YourKoaConfiguration from "./YourKoaConfiguration";
import assert from 'node:assert/strict';

try {
  assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
  const atPort = Number( process.env.PORT );

  new MicroserviceFactory( new YourKoaConfiguration() )
    .microservice( atPort + 1 )
    .deploy();
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