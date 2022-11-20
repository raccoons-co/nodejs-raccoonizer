/**
 * Describes supported by microservice operations.
 */
export default interface Microservice {
  /**
   * Puts the microservice into operation.
   * Usually binds configured microservice to port and start to listen.
   */
  deploy(): void;
}
