import NodejsMicroservice from "../NodejsMicroservice";
import express from "express";
import Microservice from "../Microservice";
import AbstractCommand from "../AbstractCommand";
import ExpressDeployCommand from "./ExpressDeployCommand";

/**
 * A Express Nodejs microservice that applies your configuration class.
 */
export default class ExpressMicroservice
  extends NodejsMicroservice<express.Express>
  implements Microservice {

  /** The microservice will listen this port. */
  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration class instance.
   *
   * @param port The microservice will listen this port.
   * @param command Your configuration class instance.
   */
  constructor(port: number, command: AbstractCommand<NodejsMicroservice<express.Express>> ) {
    super( express() );
    this.port = port;
    command.execute( this );
  }

  /**
   * Puts the microservice into operation.
   */
  public deploy(): void {
    new ExpressDeployCommand( this.port ).execute( this ) ;
  }
}
