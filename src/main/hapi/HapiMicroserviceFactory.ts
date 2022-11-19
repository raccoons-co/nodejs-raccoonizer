import AbstractCommand from "../AbstractCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import HapiMicroservice from "./HapiMicroservice";
import Hapi from "@hapi/hapi";


/**
 * Factory makes HapiMicroservice objects.
 */
export default abstract class HapiMicroserviceFactory
  extends AbstractCommand<Hapi.Server>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `HapiMicroservice` object.
   */
  public microservice( atPort: number ): HapiMicroservice {
    return new HapiMicroservice( atPort, this );
  }
}