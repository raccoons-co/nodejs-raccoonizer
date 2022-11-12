/**
 * Represents NodeJS framework of specified type.
 */
export default class NodejsFramework<T> {

  private framework: T;

  /**
   * Initiates instance with framework and its configuration.
   */
  constructor( framework: T ) {
    this.framework = framework;
    this.initConfiguration();
  }

  /**
   * Handles initial framework configuration.
   */
   //@Override
  protected initConfiguration(): void {
    /*eslint no-empty-function: "off"*/
  }

  /**
   * Returns this framework;
   */
  protected instance(): T {
      return this.framework;
  }
}
