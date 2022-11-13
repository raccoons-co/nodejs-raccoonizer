import NodejsFrameworkConfiguration from "./NodejsFrameworkConfiguration";

/**
 * Represents NodeJS framework of specified type.
 */
export default class NodejsFramework<T> {

  private framework: T;

  /**
   * Initiates instance with framework and applies configuration.
   */
  constructor( framework: T, configuration: NodejsFrameworkConfiguration<T> ) {
    this.framework = framework;
    configuration.applyTo(framework);
  }

  /**
   * Returns this framework;
   */
  protected instance(): T {
      return this.framework;
  }
}
