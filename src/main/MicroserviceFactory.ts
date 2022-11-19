import AbstractMicroserviceFactory from "./AbstractMicroserviceFactory";
import Microservice from "./Microservice";

/**
 * Factory makes microservices based on your configuration class.
 * Your configuration class must extend concrete microservice factory to
 * define type of created microservices.
 */
export default class MicroserviceFactory {

  private factory: AbstractMicroserviceFactory;

  /**
   * Initiates concrete microservice factory.
   */
  constructor( factory: AbstractMicroserviceFactory ) {
    this.factory = factory;
  }

  /**
   * Returns a new configured microservice object.
   */
  public microservice( atPort: number ): Microservice {
    return this.factory.microservice( atPort );
  }
}
