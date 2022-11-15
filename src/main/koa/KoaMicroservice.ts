import KoaFramework from "./KoaFramework";
import Microservice from "../Microservice";
import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";

/**
 * A Koa Nodejs microservice and your configuration.
 */
export default class KoaMicroservice
  extends KoaFramework
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

  public deploy(): void {
    this.application()
      .listen( this.port, () => {
        console.log("%s listening on port %s", this.constructor.name, this.port );
      });
  }
}
