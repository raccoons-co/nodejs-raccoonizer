/**
 * Represents Nodejs microservice of some application type.
 *
 * @typeParam T The type of Nodejs application.
 */
export default abstract class NodejsMicroservice<T> {

  /** Nodejs application */
  private app: T;

  /**
   * Initiates microservice with application instance.
   *
   * @typeParam T The type of Nodejs application.
   * @param app The instance of Nodejs application.
   */
  constructor(app: T) {
    this.app = app
  }

  /**
   * Obtains the application value.
   *
   * @typeParam T The type application.
   * @returns The application value.
   */
  public application(): T {
    return this.app;
  }
}
