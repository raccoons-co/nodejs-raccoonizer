/**
 * Represents NodeJS
 */
export default class NodejsFramework<T> {

  private framework: T;

  constructor( framework: T ) {
    this.framework = framework;
    this.configuration();
  }

  public instance(): T {
      return this.framework;
  }

  protected configuration(): void  {}

  public listen( port: number ): void {}
}