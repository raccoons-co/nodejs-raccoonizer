import assert from 'node:assert/strict';
import express from "express";
import ExpressMicroservice from './src/ExpressMicroservice';
import Koa from "koa";
import KoaMicroservice from './src/KoaMicroservice';

try {
    assert( process.env.PORT, "Checks if PORT environment variable exist" );
    const port = Number( process.env.PORT );

    new KoaMicroservice(port).deploy();
    new ExpressMicroservice(port +1 ).deploy( );

} catch( exception ) {
    console.log( exception );
}
