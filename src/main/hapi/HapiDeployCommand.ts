import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import Hapi from "@hapi/hapi";

export default class HapiDeployCommand
  implements Command<Hapi.Server> {

  public accept( microservice: NodejsMicroservice<Hapi.Server> ){
    microservice.application().start();
    console.log("%s listening on port %s", microservice.constructor.name,
      microservice.application().info.port );
  }
}