import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import Hapi from "@hapi/hapi";

export default class HapiDeployCommand
  implements Command<NodejsMicroservice<Hapi.Server>> {

  public execute( microservice: NodejsMicroservice<Hapi.Server> ){
    microservice.application().start();
    console.log("%s listening on port %s", microservice.constructor.name,
      microservice.application().info.port );
  }
}