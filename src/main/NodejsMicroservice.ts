import Command from "./Command";

/**
 * Represents abstract framework.
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

  /**
   * Handles microservice control command processing.
   */
  protected handle( command: Command<T> ){
    command.accept(this);
  }
}