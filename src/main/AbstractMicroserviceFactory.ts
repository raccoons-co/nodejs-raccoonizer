import Microservice from "./Microservice";

/**
 * Abstract microservice factory interface.
 */
export default interface AbstractMicroserviceFactory {
  /**
   * Makes a new microservice object with assigned port to listen.
   *
   * @param atPort Specifies the port to listen.
   * @return Microservice The new microservice object.
   */
  microservice( atPort: number ): Microservice;
}