/**
  * A command do some work for microservice.
  *
  * @typeParam T The type of microservice that command supports.
  */
export default interface Command<T> {
  /**
   * Executes instructions for microservice.
   *
   * @typeParam T The type of microservice that command supports.
   * @param microservice The microservice that delegates to do some work.
   */
  execute( microservice: T ): void;
}