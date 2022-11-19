import { KoaMicroserviceFactory, NodejsMicroservice } from "../main/index";
import Koa from "koa";

export default class YourKoaConfiguration
  extends KoaMicroserviceFactory {

  public execute( microservice: NodejsMicroservice<Koa> ): void {
    microservice.application()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}