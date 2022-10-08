import express from "express";
import Framework from "./Framework";

export default class ExpressConfiguration extends Framework<express.Express> {

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