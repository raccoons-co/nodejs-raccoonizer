import NodejsFramework from "./NodejsFramework";
import express from "express";

/**
 * Express configuration and listen handler.
 */
export default class ExpressMicroservice
  extends NodejsFramework<express.Express> {

  private port: number;

  /**
   * Initiates instance with new Express framework.
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
        (req: any, res: any) => { res.send("Hello World!"); }
      );
  }

  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
