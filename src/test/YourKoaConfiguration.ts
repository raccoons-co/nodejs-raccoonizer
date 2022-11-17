import { KoaMicroserviceFactory, KoaFramework } from "../main/index";
import Koa from "koa";

export default class YourKoaConfiguration
  extends KoaMicroserviceFactory {

  accept( koaFramework: KoaFramework ): void {
    koaFramework.application()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}