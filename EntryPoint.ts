import ExpressMicroservice from './src/ExpressMicroservice';
import HapiMicroservice from './src/HapiMicroservice';
import KoaMicroservice from './src/KoaMicroservice';
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );

    new HapiMicroservice( atPort + 2 ).deploy();
    new KoaMicroservice( atPort + 1 ).deploy();
    new ExpressMicroservice( atPort ).deploy( );

} catch( exception ) {
    console.log( exception );
}
