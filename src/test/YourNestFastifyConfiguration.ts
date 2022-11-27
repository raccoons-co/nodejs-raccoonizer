import { NestFastifyMicroserviceFactory, NestFastifyMicroservice } from "../main/index";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import YourNestFastifyAppModule from "./YourNestFastifyAppModule";


export default class YourNestFastifyConfiguration
  extends NestFastifyMicroserviceFactory {

  constructor() {
    super( YourNestFastifyAppModule );
  }

  public execute( microservice: NestFastifyMicroservice ): void {
    console.log( "%s is on fire", this.constructor.name );
  }
}