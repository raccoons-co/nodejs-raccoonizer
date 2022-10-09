import assert from 'node:assert/strict';
import ExpressMicroservice from './src/ExpressMicroservice';
import KoaMicroservice from './src/KoaMicroservice';
import HapiMicroservice from './src/HapiMicroservice';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const port = Number( process.env.PORT );

    new HapiMicroservice( port + 2 ).deploy();
    new KoaMicroservice( port + 1 ).deploy();
    new ExpressMicroservice( port ).deploy( );

} catch( exception ) {
    console.log( exception );
}
