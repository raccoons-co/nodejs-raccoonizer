import NodejsFramework from "./NodejsFramework";
import Microservice from "./Microservice";
import WebAppModule from './WebAppModule';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';

/**
 * A  Nest Fastify NodeJS microservice and your configuration.
 */
export default class NestFastifyMicroservice
  extends NodejsFramework<Promise<NestFastifyApplication>>
  implements Microservice {

  private port: number;

  /**
   * Initiates Nest Fastify framework and port number to listen.
   */
  constructor(port: number) {
    super(
      NestFactory.create<NestFastifyApplication>(
        WebAppModule,
        new FastifyAdapter({ logger: true })
    ));
    this.port = port;
  }

  //@Implementation
  public deploy(): void {
    this.instance()
      .then((app) => {
        app.listen(
          this.port,
          () => { console.log("%s listening on port %s", this.constructor.name, this.port ) }
        );
      });
  }
}