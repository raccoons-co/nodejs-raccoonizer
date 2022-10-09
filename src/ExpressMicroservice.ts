import NodejsFramework from "./NodejsFramework";
import express from "express";
import Microservice from "./Microservice";


/**
 * New NodeJS microservice with Express framework and your configuration.
 */
export default class ExpressMicroservice
  extends NodejsFramework<express.Express>
  implements Microservice {

  private port: number;

  /**
   * Initiates Express framework and port number to listen.
   */
  constructor(port: number) {
    super(express());
    this.port = port;
  }

  //@Override
  protected initConfiguration(): void {
    this.instance()
      .get(
        "/",
        (req: express.Request, res: express.Response ) => { res.send("Hello World!"); }
      );
  }

  //@Implement
  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
