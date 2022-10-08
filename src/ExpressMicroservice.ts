import NodejsFramework from "./NodejsFramework";
import express from "express";

/**
 * Express configuration and listen handler.
 */
export default class ExpressMicroservice extends NodejsFramework<express.Express> {

  /**
   * Initiates instance with new Express framework.
   */
  constructor() {
    super(express());
  }

  //@Override
  protected initConfiguration(): void {
    this.instance()
      .get(
        "/",
        (req: any, res: any) => { res.send("Hello World!"); }
      );
  }

  public expose( port: number ): void {
    this.instance()
      .listen( port, () => {
        console.log( "%s listening on port %s", this.constructor.name, port );
      });
  }
}
