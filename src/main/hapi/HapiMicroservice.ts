import NodejsMicroservice from "../NodejsMicroservice";
import Hapi from "@hapi/hapi";
import Microservice from "../Microservice";
import Command from "../Command";
import HapiDeployCommand from "./HapiDeployCommand";

/**
 * A Hapi Nodejs microservice and your configuration.
 */
export default class HapiMicroservice
  extends NodejsMicroservice<Hapi.Server>
  implements Microservice {

  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration.
   */
  constructor( port: number, command: Command<NodejsMicroservice<Hapi.Server>> ) {
    super(new Hapi.Server( { port: port } ) );
    this.port = port;
    command.execute( this );
  }

  public deploy(): void {
    new HapiDeployCommand().execute( this );
  }
}
