import NodejsFramework from "./NodejsFramework";
import Koa from "koa";
import Microservice from "./Microservice";

/**
 * A Koa NodeJS microservice and your configuration.
 */
export default class KoaMicroservice
  extends NodejsFramework<Koa>
  implements Microservice {

  private port: number;

  /**
   * Initiates Koa framework and port number to listen.
   */
  constructor(port: number) {
    super(new Koa());
    this.port = port;
  }

  //@Override
  protected initConfiguration(): void {
    this.instance()
      .use(async ( ctx: Koa.Context ) => { ctx.body = "Hello World"; } );
  }

  //@Implementation
  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log("%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
