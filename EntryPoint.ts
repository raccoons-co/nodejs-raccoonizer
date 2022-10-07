import assert from 'node:assert/strict';
import KoaRaccoonizer from './src/KoaRaccoonizer';
//import NestRaccoonizer from './src/NestRaccoonizer';
// import ExpressRaccoonizer from './src/ExpressRaccoonizer';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const atPort = Number( process.env.PORT );
    new KoaRaccoonizer( atPort ).run();
    //new NestRaccoonizer( atPort ).run();
    // new ExpressRaccoonizer( atPort ).run();
} catch( exception ) {
    console.log( exception );
}