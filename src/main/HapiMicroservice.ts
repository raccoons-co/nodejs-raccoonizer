import NodejsFramework from "./NodejsFramework";
import Hapi from "@hapi/hapi";
import Microservice from "./Microservice";

/**
 * A Hapi NodeJS microservice and your configuration.
 */
export default class HapiMicroservice
  extends NodejsFramework<Hapi.Server>
  implements Microservice {

  /**
   * Initiates Hapi framework with port number to listen.
   */
  constructor(port: number) {
    super(  new Hapi.Server( { port: port } ) );
  }

  //@Override
  protected initConfiguration(): void {
    this.instance()
      .route({
        method: 'GET',
        path: '/',
        handler: ( request: Hapi.Request, h: Hapi.ResponseToolkit ) => {
          return 'Hello World!';
        }
      });
  }

  //@Implement
  public deploy(): void {
    this.instance().start();
    console.log("%s listening on port %s", this.constructor.name, this.instance().info.port );
  }
}