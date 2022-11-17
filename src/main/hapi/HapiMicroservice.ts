import HapiFramework from "./HapiFramework";
import Microservice from "../Microservice";
import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";


/**
 * A Hapi Nodejs microservice and your configuration.
 */
export default class HapiMicroservice
  extends HapiFramework
  implements Microservice {

  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration.
   */
  constructor( port: number, configuration: AbstractMicroserviceConfiguration ) {
    super();
    this.port = port;
    configuration.accept(this);
  }

  //@Implement
  public deploy(): void {
//     this.instance().options.port( this.port );
    this.application().start();
    console.log("%s listening on port %s", this.constructor.name, this.application().info.port );
  }
}