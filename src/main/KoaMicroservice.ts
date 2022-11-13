import NodejsFramework from "./NodejsFramework";
import NodejsFrameworkConfiguration from "./NodejsFrameworkConfiguration";
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
   * Applies Koa framework and port number to listen.
   */
  constructor(port: number, configuration: NodejsFrameworkConfiguration<Koa>) {
    super(new Koa(), configuration);
    this.port = port;
  }

  public deploy(): void {
    this.instance()
      .listen( this.port, () => {
        console.log("%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
