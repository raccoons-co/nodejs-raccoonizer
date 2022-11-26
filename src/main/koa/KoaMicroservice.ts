import NodejsMicroservice from "../NodejsMicroservice";
import Koa from "koa";
import Microservice from "../Microservice";
import AbstractCommand from "../AbstractCommand";
import KoaDeployCommand from "./KoaDeployCommand";

/**
 * A Koa Nodejs microservice that applies your configuration class.
 */
export default class KoaMicroservice
  extends NodejsMicroservice<Koa>
  implements Microservice {

  /** The microservice will listen this port. */
  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration class instance.
   *
   * @param port The microservice will listen this port.
   * @param command Your configuration class instance.
   */
  constructor( port: number, command: AbstractCommand<NodejsMicroservice<Koa>> ) {
    super( new Koa() );
    this.port = port;
    command.execute( this );
  }

  /**
   * Puts the microservice into operation.
   */
  public deploy(): void {
    new KoaDeployCommand( this.port ).execute( this );
  }
}
