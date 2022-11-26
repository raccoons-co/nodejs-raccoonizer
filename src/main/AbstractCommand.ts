/**
 * Defines interface for your configuration class.
 */
export default abstract class AbstractCommand<T> {

  /**
   * Executes initial instructions to setup microservice.
   *
   * @typeParam T The type of microservice that command supports.
   * @param microservice The microservice that delegates to perform configuration.
   */
  abstract execute( microservice: T ): void;
}
