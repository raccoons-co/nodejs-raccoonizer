import { NodejsFrameworkConfiguration } from "../main/index";
import express from "express";

export default class ExpressConfiguration implements NodejsFrameworkConfiguration<express.Express> {
  applyTo( expressInstance: express.Express ): void {
    expressInstance
      .get(
        "/",
        (req: express.Request, res: express.Response ) => { res.send("Hello World!"); }
    );
  }
}