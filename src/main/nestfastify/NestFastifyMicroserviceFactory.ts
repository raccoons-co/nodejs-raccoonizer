import AbstractCommand from "../AbstractCommand";
import AbstractMicroserviceFactory from "../AbstractMicroserviceFactory";
import NestFastifyMicroservice from "./NestFastifyMicroservice";

/**
 * This factory makes {@link NestFastifyMicroservice} objects.
 */
export default abstract class NestFastifyMicroserviceFactory
  extends AbstractCommand<NestFastifyMicroservice>
  implements AbstractMicroserviceFactory {

  private AppModule: unknown;

  constructor( AppModule: unknown ) {
    super();
    this.AppModule = AppModule;
  }

  /**
   * Returns a new configured {@link NestFastifyMicroservice} object.
   *
   * @param atPort Specifies the port to listen.
   * @override
   */
  public microservice( atPort: number ): NestFastifyMicroservice {
    return new NestFastifyMicroservice( atPort, this, this.AppModule );
  }
}