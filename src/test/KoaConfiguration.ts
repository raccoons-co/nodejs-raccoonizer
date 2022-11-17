import { NodejsFrameworkConfiguration } from "../main/index";
import Koa from "koa";

export default class KoaConfiguration implements NodejsFrameworkConfiguration<Koa> {
  applyTo( koaInstance: Koa ): void {
    koaInstance
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }
}