import AbstractCommand from "../AbstractCommand";
import NestFastifyMicroservice from "./NestFastifyMicroservice";

/**
 * Puts NestFastify microservice into operation.
 */
export default class NestFastifyDeployCommand
  extends AbstractCommand<NestFastifyMicroservice> {

  /** The microservice will listen this port. */
  private port: number;

  /**
   * Initiates command with port number value.
   *
   * @param port The microservice will listen this port.
   */
  constructor( port: number ) {
    super();
    this.port = port;
  }

  /**
   * Starts to listen ports.
   *
   * @param microservice The microservice that delegates to perform deploy.
   */
  public execute( microservice: NestFastifyMicroservice ) {
    microservice.application().then( ( app ) => {
        app.listen( this.port ).then( ( httpServer ) => {
            console.log("%s listening on %s", microservice.constructor.name, httpServer.address() )
        });
    });
  }
}