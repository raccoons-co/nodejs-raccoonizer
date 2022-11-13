import {
  Microservice,
  KoaMicroservice,
  ExpressMicroservice,
  HapiMicroservice,
  NestFastifyMicroservice
} from "../main/index";
import KoaConfiguration from "./KoaConfiguration";
import ExpressConfiguration from "./ExpressConfiguration";
import HapiConfiguration from "./HapiConfiguration";
import NestFastifyConfiguration from "./NestFastifyConfiguration";
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );

    new KoaMicroservice( atPort, new KoaConfiguration() ).deploy();
    new ExpressMicroservice( atPort + 1, new ExpressConfiguration() ).deploy();
    new HapiMicroservice( atPort + 2, new HapiConfiguration() ).deploy();
    new NestFastifyMicroservice( atPort + 3, new NestFastifyConfiguration(), Object);
} catch( exception ) {
    console.log( exception );
}
