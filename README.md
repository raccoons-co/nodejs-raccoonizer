# nodejs-raccoonizer

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/raccoons-co/nodejs-raccoonizer/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/raccoons-co/nodejs-raccoonizer/tree/main)

A library for unified deploying of Nodejs microservices.

Simple. Minimal. Beautiful.
© 2022 Raccoons. Developing a simple way to change.

Install library with
```shell
% npm install @raccoons-co/nodejs-raccoonizer
```

Implement `YourKoaConfiguration.ts`:
```typescript
import { KoaMicroserviceFactory, KoaMicroservice } from "@raccoons-co/nodejs-raccoonizer";
import Koa from "koa";

export default class YourKoaConfiguration
  extends KoaMicroserviceFactory {

  public execute( microservice: KoaMicroservice ): void {
    microservice.application()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}
```
Implement your main `EntryPoint.ts`:
```typescript
import { MicroserviceFactory } from "@raccoons-co/nodejs-raccoonizer";
import YourKoaConfiguration from "./YourKoaConfiguration";
import assert from "node:assert/strict";

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
    "prestart": "npm run test",
    "pretest": "npm run build",
    "start": "npm run this.microservice",
    "test": "echo ImplementYourTests",
    "this.microservice": "node dist/EntryPoint"
}
```

For more