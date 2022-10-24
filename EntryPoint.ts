import KoaMicroservice from './src/KoaMicroservice';
import assert from 'node:assert/strict';

try {
    assert( process.env.PORT, "Fails if PORT environment variable do not exist." );
    const atPort = Number( process.env.PORT );
    new KoaMicroservice( atPort ).deploy();
} catch( exception ) {
    console.log( exception );
}
