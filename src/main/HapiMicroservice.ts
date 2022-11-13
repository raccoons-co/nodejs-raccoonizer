import NodejsFramework from "./NodejsFramework";
import NodejsFrameworkConfiguration from "./NodejsFrameworkConfiguration";
import Hapi from "@hapi/hapi";
import Microservice from "./Microservice";

/**
 * A Hapi NodeJS microservice and your configuration.
 * @see NodejsFrameworkConfiguration interface.
 */
export default class HapiMicroservice
  extends NodejsFramework<Hapi.Server>
  implements Microservice {

  /**
   * Initiates Hapi framework with port number to listen.
   */
  constructor(port: number, configuration: NodejsFrameworkConfiguration<Hapi.Server>) {
    super( new Hapi.Server( { port: port } ), configuration );
  }

  //@Implement
  public deploy(): void {
    this.instance().start();
    console.log("%s listening on port %s", this.constructor.name, this.instance().info.port );
  }
}