import { ExpressMicroserviceFactory, ExpressFramework } from "../main/index";
import express from "express";

export default class YourExpressConfiguration
  extends ExpressMicroserviceFactory {

  accept( expressFramework: ExpressFramework ): void {
    expressFramework.application()
      .get(
        "/",
        (req: express.Request, res: express.Response ) => { res.send("Hello World!"); }
    );
  }
}
