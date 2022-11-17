import ExpressFramework from "./ExpressFramework";
import Microservice from "../Microservice";
import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";

/**
 * An Express Nodejs microservice and your configuration.
 */
export default class ExpressMicroservice
  extends ExpressFramework
  implements Microservice {

  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration.
   */
  constructor(port: number, configuration: AbstractMicroserviceConfiguration ) {
    super();
    this.port = port;
    configuration.accept(this);
  }

  //@Implement
  public deploy(): void {
    this.application()
      .listen( this.port, () => {
        console.log( "%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
