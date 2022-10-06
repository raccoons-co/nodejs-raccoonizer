import assert from 'node:assert/strict';
// import ExpressRaccoonizer from './src/ExpressRaccoonizer';
import NestRaccoonizer from './src/NestRaccoonizer';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const atPort = Number( process.env.PORT );
    new NestRaccoonizer( atPort ).run();

} catch( exception ) {
    console.log( exception );
}