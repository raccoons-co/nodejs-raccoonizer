import KoaMicroservice from './src/KoaMicroservice';
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );
    new KoaMicroservice( atPort ).deploy();
    //new HapiMicroservice( atPort ).deploy();
    //new ExpressMicroservice( atPort ).deploy( );

} catch( exception ) {
    console.log( exception );
}
