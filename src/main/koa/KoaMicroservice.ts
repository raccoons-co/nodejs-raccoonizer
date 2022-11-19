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
  constructor( port: number, command: Command<Koa> ) {
    super( new Koa() );
    this.port = port;
    this.handle( command );
  }

  public deploy(): void {
    this.handle( new KoaDeployCommand(this.port) );
  }
}
