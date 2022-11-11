import Microservice from './src/Microservice';
import ExpressMicroservice from './src/ExpressMicroservice';
import HapiMicroservice from './src/HapiMicroservice';
import KoaMicroservice from './src/KoaMicroservice';
import NestFastifyMicroservice from './src/NestFastifyMicroservice';
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );

    const raccoonizerMap = new Map< string, Microservice >;

    raccoonizerMap
      .set( "Express", new ExpressMicroservice( atPort ))
      .set( "Hapi", new HapiMicroservice( atPort + 1 ))
      .set( "Koa", new KoaMicroservice( atPort + 2 ))
      .set( "NestFastify", new NestFastifyMicroservice( atPort + 3 ));

    raccoonizerMap.forEach( ( microservice, mapKey ) => {
      microservice.deploy();
    });
} catch( exception ) {
    console.log( exception );
}
