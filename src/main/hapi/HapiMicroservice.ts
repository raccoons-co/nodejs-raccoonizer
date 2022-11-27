import NodejsMicroservice from "../NodejsMicroservice";
import Hapi from "@hapi/hapi";
import Microservice from "../Microservice";
import AbstractCommand from "../AbstractCommand";
import HapiDeployCommand from "./HapiDeployCommand";

 /**
  * A Hapi Nodejs microservice that applies your configuration class.
  */
export default class HapiMicroservice
  extends NodejsMicroservice<Hapi.Server>
  implements Microservice {

  /** The microservice will listen this port. */
  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration class instance.
   *
   * @param port The microservice will listen this port.
   * @param command Your configuration class instance.
   */
  constructor( port: number, command: AbstractCommand<HapiMicroservice> ) {
    super(new Hapi.Server( { port: port } ) );
    this.port = port;
    command.execute( this );
  }

  /**
   * Puts the microservice into operation.
   */
  public deploy(): void {
    new HapiDeployCommand().execute( this );
  }
}
