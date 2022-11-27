import AbstractCommand from "../AbstractCommand";
import HapiMicroservice from "./HapiMicroservice";

/**
 * Puts Hapi microservice into operation.
 */
export default class HapiDeployCommand
  extends AbstractCommand<HapiMicroservice> {

  /**
   * Starts to listen ports.
   *
   * @param microservice The microservice that delegates to perform deploy.
   */
  public execute( microservice: HapiMicroservice ){
    microservice.application().start();
    console.log("%s listening on port %s", microservice.constructor.name,
      microservice.application().info.port );
  }
}