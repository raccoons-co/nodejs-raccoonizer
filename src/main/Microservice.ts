/**
 * Microservice interface
 */
export default interface Microservice {

  /**
   * Binds configured framework to port and start to listen.
   */
  deploy(): void;
}
