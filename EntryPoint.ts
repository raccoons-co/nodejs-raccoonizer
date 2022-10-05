import assert from 'node:assert/strict';
import NodejsExpressRaccoonizer from './src/NodejsExpressRaccoonizer';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const atPort = Number( process.env.PORT );
    new NodejsExpressRaccoonizer( atPort ).run();

} catch( exception ) {
    console.log( exception );
}