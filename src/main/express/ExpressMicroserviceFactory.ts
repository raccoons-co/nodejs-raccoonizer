import AbstractCommand from "../AbstractCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import ExpressMicroservice from "./ExpressMicroservice";
import express from "express";

/**
 * Factory makes `ExpressMicroservice` objects.
 */
export default abstract class ExpressMicroserviceFactory
  extends AbstractCommand<express.Express>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `ExpressMicroservice` object.
   */
  public microservice( atPort: number ): ExpressMicroservice {
    return new ExpressMicroservice( atPort, this );
  }
}
