import NodejsMicroservice from "../NodejsMicroservice";
import Koa from "koa";
import Microservice from "../Microservice";
import Command from "../Command";
import KoaDeployCommand from "./KoaDeployCommand";

/**
 * A Koa Nodejs microservice and your configuration.
 */
export default class KoaMicroservice
  extends NodejsMicroservice<Koa>
  implements Microservice {

  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration.
   */
  constructor( port: number, command: Command<NodejsMicroservice<Koa>> ) {
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
