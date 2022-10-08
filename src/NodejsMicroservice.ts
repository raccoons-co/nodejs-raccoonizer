import Microservice from "./Microservice";
import NodejsFramework from "./NodejsFramework";

/**
 * Represents NodejsMicroservice
 */
export default class NodejsMicroservice<T> implements Microservice {

  private framework: NodejsFramework<T>;
  private port: number;

  /**
   * Initiates microservice port number and NodeJS framework
   */
  constructor(port: number, framework: NodejsFramework<T>) {
    this.framework = framework;
    this.port = port;
  }

  public run(): void {
    this.framework.listen(this.port);
  }
}