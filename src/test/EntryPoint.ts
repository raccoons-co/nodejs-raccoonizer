import {
 MicroserviceFactory,
 KoaMicroservice,
 ExpressMicroservice,
 HapiMicroservice } from "../main/index";
import YourKoaConfiguration from "./YourKoaConfiguration";
import YourExpressConfiguration from "./YourExpressConfiguration";
import YourHapiConfiguration from "./YourHapiConfiguration";
import assert from 'node:assert/strict';

try {
  assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
  const atPort = Number( process.env.PORT );

  new KoaMicroservice( atPort, new YourKoaConfiguration() ).deploy();
  new ExpressMicroservice( atPort + 1, new YourExpressConfiguration() ).deploy();
  new HapiMicroservice( atPort + 2, new YourHapiConfiguration() ).deploy();

  new MicroserviceFactory( new YourKoaConfiguration() )
    .microservice( atPort + 3 )
    .deploy();

  new MicroserviceFactory( new YourExpressConfiguration() )
    .microservice( atPort + 4 )
    .deploy();

  new MicroserviceFactory( new YourHapiConfiguration() )
    .microservice( atPort + 5 )
    .deploy();
} catch( exception ) {
    console.log( exception );
}
