import AbstractCommand from "../AbstractCommand";
import NodejsMicroservice from "../NodejsMicroservice";
import Koa from "koa";

/**
 * Puts Koa microservice into operation.
 */
export default class KoaDeployCommand
  extends AbstractCommand<NodejsMicroservice<Koa>> {

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
  public execute( microservice: NodejsMicroservice<Koa> ) {
    microservice.application()
      .listen( this.port, () => {
        console.log("%s listening on port %s", microservice.constructor.name, this.port );
      });
  }
}