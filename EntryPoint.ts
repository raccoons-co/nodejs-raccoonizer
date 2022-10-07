import assert from 'node:assert/strict';
import KoaRaccoonizer from './src/KoaRaccoonizer';
import NestFastifyRaccoonizer from './src/NestFastifyRaccoonizer';
import ExpressRaccoonizer from './src/ExpressRaccoonizer';
import NodejsHapiMicroservice from './src/NodejsHapiMicroservice';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const atPort = Number( process.env.PORT );
    new NodejsHapiMicroservice( atPort ).run();
    // new KoaRaccoonizer( atPort + 2 ).run();
    // new NestFastifyRaccoonizer( atPort + 1  ).run();
    // new ExpressRaccoonizer( atPort ).run();
} catch( exception ) {
    console.log( exception );
}