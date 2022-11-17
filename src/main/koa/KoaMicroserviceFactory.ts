import AbstractMicroserviceConfiguration from "../AbstractMicroserviceConfiguration";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import KoaMicroservice from "./KoaMicroservice";

/**
 * Factory makes `KoaMicroservice` objects.
 */
export default abstract class KoaMicroserviceFactory
  extends AbstractMicroserviceConfiguration
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `KoaMicroservice` object.
   */
  public microservice( atPort: number ): KoaMicroservice {
    return new KoaMicroservice( atPort, this );
  }
}