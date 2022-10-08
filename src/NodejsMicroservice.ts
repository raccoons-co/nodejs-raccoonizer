import Microservice from "./Microservice";
import Framework from "./Framework";

/**
 * Represents NodejsMicroservice
 */
export default class NodejsMicroservice<T> implements Microservice {

  private framework: Framework<T>;
  private port: number;

  /**
   * Initiates microservice port number and NodeJS framework
   */
  constructor(port: number, framework: Framework<T>) {
    this.framework = framework;
    this.port = port;
  }

  public run(): void {
    this.framework.listen(this.port);
  }
}