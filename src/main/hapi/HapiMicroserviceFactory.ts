import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import HapiMicroservice from "./HapiMicroservice";

/**
 * Factory makes HapiMicroservice objects.
 */
export default abstract class HapiMicroserviceFactory
  extends AbstractMicroserviceConfiguration
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `HapiMicroservice` object.
   */
  public microservice( atPort: number ): HapiMicroservice {
    return new HapiMicroservice( atPort, this );
  }
}