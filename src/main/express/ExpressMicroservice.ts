import NodejsMicroservice from "../NodejsMicroservice";
import express from "express";
import Microservice from "../Microservice";
import Command from "../Command";
import ExpressDeployCommand from "./ExpressDeployCommand";

/**
 * An Express Nodejs microservice and your configuration.
 */
export default class ExpressMicroservice
  extends NodejsMicroservice<express.Express>
  implements Microservice {

  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration.
   */
  constructor(port: number, command: Command<NodejsMicroservice<express.Express>> ) {
    super( express() );
    this.port = port;
    command.execute( this );
  }
  public deploy(): void {
    new ExpressDeployCommand( this.port ).execute( this ) ;
  }
}
