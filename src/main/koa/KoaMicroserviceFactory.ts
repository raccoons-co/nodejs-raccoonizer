import AbstractCommand from "../AbstractCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import KoaMicroservice from "./KoaMicroservice";

/**
 * This factory makes {@link KoaMicroservice} objects.
 */
export default abstract class KoaMicroserviceFactory
  extends AbstractCommand<KoaMicroservice>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured {@link KoaMicroservice} object.
   *
   * @param atPort Specifies the port to listen.
   * @override
   */
  public microservice( atPort: number ): KoaMicroservice {
    return new KoaMicroservice( atPort, this );
  }
}