import NodejsMicroservice from "./NodejsMicroservice";

/**
 * Command interface
 */
export default interface Command<T> {
  /**
   * Accepts microservice for manipulations.
   */
  accept( microservice: NodejsMicroservice<T> ): void;
}