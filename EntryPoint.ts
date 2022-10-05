import assert from 'node:assert/strict';
import NodejsExpressRaccoonizer from './src/NodejsExpressRaccoonizer';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
} catch( exception ) {
    console.log( exception );
} finally {
    const atPort = Number( process.env.PORT );
    new NodejsExpressRaccoonizer( atPort ).run();
}
