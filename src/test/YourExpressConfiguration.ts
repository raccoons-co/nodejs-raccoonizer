import { ExpressMicroserviceFactory, ExpressMicroservice  } from "../main/index";
import express from "express";

export default class YourExpressConfiguration
  extends ExpressMicroserviceFactory {

  public execute( microservice: ExpressMicroservice ): void {
    microservice.application()
      .get(
        "/",
        (req: express.Request, res: express.Response ) => { res.send("Hello World!"); }
    );
  }
}
