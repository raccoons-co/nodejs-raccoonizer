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
  new ExpressMicroservice( atPort + 1, new YourExpressConfiguration() ).deploy();
  new HapiMicroservice( atPort + 2, new YourHapiConfiguration() ).deploy();
  new NestFastifyMicroservice( atPort + 3, new YourNestFastifyConfiguration(),
    YourNestFastifyAppModule ).deploy();

  new MicroserviceFactory( new YourKoaConfiguration() )
    .microservice( atPort + 10 )
    .deploy();

  new MicroserviceFactory( new YourExpressConfiguration() )
    .microservice( atPort + 11 )
    .deploy();

  new MicroserviceFactory( new YourHapiConfiguration() )
    .microservice( atPort + 12 )
    .deploy();

    new MicroserviceFactory( new YourNestFastifyConfiguration() )
      .microservice( atPort + 13 )
      .deploy();

} catch( exception ) {
    console.log( exception );
}
