import NodejsFramework from "./NodejsFramework";
import Hapi from "@hapi/hapi";
import Microservice from "./Microservice";

/**
 * Koa configuration and listen handler.
 */
export default class HapiMicroservice
  extends NodejsFramework<Hapi.Server>
  implements Microservice {

    constructor(port: number) {
      super(new Hapi.Server( { port: port } ));
    }

//@Override
  protected initConfiguration(): void {
    this.instance()
    .route({
      method: 'GET',
      path: '/',
      handler: (request, h) => { return 'Hello World!'; }
    });
  }

  //@Implementation
  public deploy(): void {
    this.instance().start();
    console.log("%s listening on port %s", this.constructor.name, this.instance().info.port );
  }
}