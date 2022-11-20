import AbstractCommand from "../AbstractCommand";
import NodejsMicroservice from "../NodejsMicroservice"
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import HapiMicroservice from "./HapiMicroservice";
import Hapi from "@hapi/hapi";

/**
 * This factory makes {@link HapiMicroservice} objects.
 */
export default abstract class HapiMicroserviceFactory
  extends AbstractCommand<NodejsMicroservice<Hapi.Server>>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured {@link HapiMicroservice} object.
   *
   * @param atPort Specifies the port to listen.
   * @override
   */
  public microservice( atPort: number ): HapiMicroservice {
    return new HapiMicroservice( atPort, this );
  }
}