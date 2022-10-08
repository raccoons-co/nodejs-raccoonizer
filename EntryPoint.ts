import assert from 'node:assert/strict';
import NodejsMicroservice from './src/NodejsMicroservice';
import express from "express";
import ExpressConfiguration from './src/ExpressConfiguration';
import Koa from "koa";
import KoaConfiguration from './src/KoaConfiguration';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const atPort = Number( process.env.PORT );

    new NodejsMicroservice<express.Express>( atPort, new ExpressConfiguration() ).run();

    new NodejsMicroservice<Koa>( atPort + 1, new KoaConfiguration()).run();

} catch( exception ) {
    console.log( exception );
}
