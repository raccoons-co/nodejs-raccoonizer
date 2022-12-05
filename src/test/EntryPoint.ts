import {
 MicroserviceFactory,
 KoaMicroservice,
 ExpressMicroservice,
 HapiMicroservice,
 NestFastifyMicroservice
 } from "../main/index";
import YourKoaConfiguration from "./YourKoaConfiguration";
import YourExpressConfiguration from "./YourExpressConfiguration";
import YourHapiConfiguration from "./YourHapiConfiguration";
import YourNestFastifyConfiguration from "./YourNestFastifyConfiguration";
import assert from "node:assert/strict";
import YourNestFastifyAppModule from "./YourNestFastifyAppModule";

try {
  assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
  const atPort = Number( process.env.PORT );

  new KoaMicroservice( atPort, new YourKoaConfiguration() ).deploy();
  new ExpressMicroservice( 0, new YourExpressConfiguration() ).deploy();
  new HapiMicroservice( 0, new YourHapiConfiguration() ).deploy();
  new NestFastifyMicroservice( 0, new YourNestFastifyConfiguration(),
    YourNestFastifyAppModule ).deploy();

  new MicroserviceFactory( new YourKoaConfiguration() )
    .microservice( 0 )
    .deploy();

  new MicroserviceFactory( new YourExpressConfiguration() )
    .microservice( 0 )
    .deploy();

  new MicroserviceFactory( new YourHapiConfiguration() )
    .microservice( 0 )
    .deploy();

    new MicroserviceFactory( new YourNestFastifyConfiguration() )
      .microservice( 0 )
      .deploy();
} catch( exception ) {
    console.log( exception );
}
