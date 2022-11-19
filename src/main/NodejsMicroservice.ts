/**
 * Represents abstract Nodejs microservice of some application type.
 */
export default abstract class NodejsMicroservice<T> {

  private app: T;

  /**
   * Initiates application.
   */
  constructor(app: T) {
    this.app = app
  }

  /**
   * Returns this application.
   */
  public application(): T {
    return this.app;
  }
}
