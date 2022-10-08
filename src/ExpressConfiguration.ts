import NodejsFramework from "./NodejsFramework";
import express from "express";

export default class ExpressConfiguration extends NodejsFramework<express.Express> {

  constructor() {
    super(express());
  }

  //@Override
  protected configuration(): void {
    this.instance()
      .get(
        "/",
        (req: any, res: any) => { res.send("Hello World!"); }
      );
  }

  //@Override
  public listen( port: number ): void {
    this.instance()
      .listen( port, () => {
        console.log( "%s listening on port %s", this.constructor.name, port );
      });
  }

}