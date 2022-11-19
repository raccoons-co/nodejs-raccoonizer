import AbstractInitCommand from "../AbstractInitCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import KoaMicroservice from "./KoaMicroservice";
import Koa from "koa";

/**
 * Factory makes `KoaMicroservice` objects.
 */
export default abstract class KoaMicroserviceFactory
  extends AbstractInitCommand<Koa>
  implements AbstractMicroserviceFactory {

  /**
   * Returns a new configured `KoaMicroservice` object.
   */
  public microservice( atPort: number ): KoaMicroservice {
    return new KoaMicroservice( atPort, this );
  }
}