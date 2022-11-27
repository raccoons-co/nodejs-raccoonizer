import AbstractCommand from "../AbstractCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import ExpressMicroservice from "./ExpressMicroservice";

/**
 * This factory makes {@link ExpressMicroservice} objects.
 */
export default abstract class ExpressMicroserviceFactory
  extends AbstractCommand<ExpressMicroservice>
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
