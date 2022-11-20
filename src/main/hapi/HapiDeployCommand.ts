import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import Hapi from "@hapi/hapi";

/**
 * Puts Hapi microservice into operation.
 */
export default class HapiDeployCommand
  implements Command<NodejsMicroservice<Hapi.Server>> {

  /**
   * Starts to listen ports.
   *
   * @param microservice The microservice that delegates to perform deploy.
   */
  public execute( microservice: NodejsMicroservice<Hapi.Server> ){
    microservice.application().start();
    console.log("%s listening on port %s", microservice.constructor.name,
      microservice.application().info.port );
  }
}