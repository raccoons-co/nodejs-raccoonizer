import AbstractCommand from "../AbstractCommand";
import NodejsMicroservice from "../NodejsMicroservice"
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import KoaMicroservice from "./KoaMicroservice";
import Koa from "koa";

/**
 * This factory makes {@link KoaMicroservice} objects.
 */
export default abstract class KoaMicroserviceFactory
  extends AbstractCommand<NodejsMicroservice<Koa>>
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