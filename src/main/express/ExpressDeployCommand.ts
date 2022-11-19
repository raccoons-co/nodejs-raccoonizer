import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import express from "express";

export default class ExpressDeployCommand
  implements Command<express.Express> {

  private port: number;

  constructor( port: number ) {
    this.port = port;
  }

  public accept( microservice: NodejsMicroservice<express.Express> ){
    microservice.application()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", microservice.constructor.name, this.port );
      });
  }
}