/**
 * Command interface
 */
export default interface Command<T> {
  /**
   * Accepts microservice for manipulations.
   */
  execute( microservice: T ): void;
}