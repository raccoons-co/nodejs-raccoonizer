import NodejsFramework from "./NodejsFramework";
import Koa from "koa";
import Microservice from "./Microservice";

/**
 * Koa configuration and listen handler.
 */
export default class KoaMicroservice
  extends NodejsFramework<Koa>
  implements Microservice {

  private port: number;

  constructor(port: number) {
    super(new Koa());
    this.port = port;
  }

  //@Override
  protected initConfiguration(): void {
    this.instance()
      .use(async (ctx:any) => { ctx.body = "Hello World"; } );
  }

  //@Implementation
  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log("%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
