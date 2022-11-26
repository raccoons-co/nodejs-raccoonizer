import AbstractCommand from "../AbstractCommand";
import NodejsMicroservice from "../NodejsMicroservice"
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import ExpressMicroservice from "./ExpressMicroservice";
import express from "express";

/**
 * This factory makes {@link ExpressMicroservice} objects.
 */
export default abstract class ExpressMicroserviceFactory
  extends AbstractCommand<NodejsMicroservice<express.Express>>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured {@link ExpressMicroservice} object.
   *
   * @param atPort Specifies the port to listen.
   * @override
   */
  public microservice( atPort: number ): ExpressMicroservice {
    return new ExpressMicroservice( atPort, this );
  }
}
