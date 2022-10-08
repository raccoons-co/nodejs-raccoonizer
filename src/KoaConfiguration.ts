import Framework from "./Framework";
import Koa from "koa";

/**
 * Represents NodeJS web application based on Koa framework.
 */
export default class KoaConfiguration extends Framework<Koa> {

  constructor() {
    super(new Koa());
  }

  //@Override
  protected configuration(): void {
    this.instance()
      .use(async (ctx:any) => { ctx.body = "Hello World"; } );
  }

  //@Override
  public listen( port: number ): void {
    this.instance()
      .listen( port, () => {
        console.log("%s listening on port %s", this.constructor.name, port );
      });
  }
}
