import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import express from "express";

export default class ExpressDeployCommand
  implements Command<NodejsMicroservice<express.Express>> {

  private port: number;

  constructor( port: number ) {
    this.port = port;
  }

  public execute( microservice: NodejsMicroservice<express.Express> ){
    microservice.application()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", microservice.constructor.name, this.port );
      });
  }
}