import assert from 'node:assert/strict';
import ExpressMicroservice from './src/ExpressMicroservice';
import KoaMicroservice from './src/KoaMicroservice';
import HapiMicroservice from './src/HapiMicroservice';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const  atPort = Number( process.env.PORT );

    new HapiMicroservice( atPort + 2 ).deploy();
    new KoaMicroservice( atPort + 1 ).deploy();
    new ExpressMicroservice( atPort ).deploy( );

} catch( exception ) {
    console.log( exception );
}
