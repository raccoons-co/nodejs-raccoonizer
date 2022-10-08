/**
 * Represents NodeJS framework of specified type.
 */
export default class NodejsFramework<T> {

  private framework: T;

  /**
   * Initiates instance with framework and it's configuration.
   */
  constructor( framework: T ) {
    this.framework = framework;
    this.initConfiguration();
  }

  /**
   * Handles initial framework configuration.
   */
  protected initConfiguration(): void  {}

  /**
   * Returns this framework;
   */
  protected instance(): T {
      return this.framework;
  }
}
