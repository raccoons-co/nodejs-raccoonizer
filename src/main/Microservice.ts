/**
 * Microservice interface
 */
export default interface Microservice {

  /**
   * Bind configured framework to port and start to listen.
   */
  deploy(): void;
}