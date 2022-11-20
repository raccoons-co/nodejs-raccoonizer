# nodejs-raccoonizer

A library for unified deploying of Nodejs microservices.

Install library with
```shell
% npm install @raccoons-co/nodejs-raccoonizer
```
```typescript
import { KoaMicroserviceFactory, NodejsMicroservice } from "@raccoons-co/nodejs-raccoonizer";
import Koa from "koa";

export default class YourKoaConfiguration
  extends KoaMicroserviceFactory {

  public execute( microservice: NodejsMicroservice<Koa> ): void {
    microservice.application()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}
```
Implement your main `EntryPoint.ts`:
```typescript
import { MicroserviceFactory } from "@raccoons-co/nodejs-raccoonizer";
import YourKoaConfiguration from "./YourKoaConfiguration";
import assert from 'node:assert/strict';

try {
  assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
  const atPort = Number( process.env.PORT );

  new MicroserviceFactory( new YourKoaConfiguration() )
    .microservice( atPort )
    .deploy();
} catch( exception ) {
    console.log( exception );
}
```
Run microservice with `package.json` script:
```
"scripts": {
  "build": "tsc",
  "prebuild": "rimraf ./dist",
  "prepare": "npm run build",
  "prestart": "npm ci",
  "start": "node dist/EntryPoint",
}
```