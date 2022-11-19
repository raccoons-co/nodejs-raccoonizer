import Command from "../Command";
import NodejsMicroservice from "../NodejsMicroservice";
import Koa from "koa";

export default class KoaDeployCommand
  implements Command<Koa> {

  private port: number;

  constructor( port: number ) {
    this.port = port;
  }

  public accept( microservice: NodejsMicroservice<Koa> ){
    microservice.application()
      .listen( this.port, () => {
        console.log("%s listening on port %s", microservice.constructor.name, this.port );
      });
  }
}