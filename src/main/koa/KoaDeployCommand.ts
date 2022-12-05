import AbstractCommand from "../AbstractCommand";
import KoaMicroservice from "./KoaMicroservice";

/**
 * Puts Koa microservice into operation.
 */
export default class KoaDeployCommand
  extends AbstractCommand<KoaMicroservice> {

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
  public execute( microservice: KoaMicroservice ) {
    const httpServer = microservice.application()
      .listen( this.port, () => {
        console.log("%s listening on %s", microservice.constructor.name, httpServer.address() );
      });
  }
}