import NodejsFramework from "./NodejsFramework";
import NodejsFrameworkConfiguration from "./NodejsFrameworkConfiguration";
import express from "express";
import Microservice from "./Microservice";

/**
 * An Express NodeJS microservice and your configuration.
 */
export default class ExpressMicroservice
  extends NodejsFramework<express.Express>
  implements Microservice {

  private port: number;

  /**
   * Initiates Express framework and port number to listen.
   */
  constructor(port: number, configuration: NodejsFrameworkConfiguration<express.Express>) {
    super(express(), configuration);
    this.port = port;
  }

  //@Implement
  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
