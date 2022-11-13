import { NodejsFrameworkConfiguration } from "../main/index";
import { NestFastifyApplication } from '@nestjs/platform-fastify';

export default class NestFastifyConfiguration
  implements NodejsFrameworkConfiguration<Promise<NestFastifyApplication>> {
  applyTo( nestFastifyInstance: Promise<NestFastifyApplication> ): void {
    /*eslint no-empty-function: "off"*/
  }
}