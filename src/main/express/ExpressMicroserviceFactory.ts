import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import ExpressMicroservice from "./ExpressMicroservice";

/**
 * Factory makes `ExpressMicroservice` objects.
 */
export default abstract class ExpressMicroserviceFactory
  extends AbstractMicroserviceConfiguration
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `ExpressMicroservice` object.
   */
  public microservice( atPort: number ): ExpressMicroservice {
    return new ExpressMicroservice( atPort, this );
  }
}
