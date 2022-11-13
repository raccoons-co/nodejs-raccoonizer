import NodejsFramework from "./NodejsFramework";
import NodejsFrameworkConfiguration from "./NodejsFrameworkConfiguration";
import Microservice from "./Microservice";
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
  constructor( port: number, configuration: NodejsFrameworkConfiguration<Promise<NestFastifyApplication>>, module: any) {
    super(
      NestFactory.create<NestFastifyApplication>(
        module,
        new FastifyAdapter({ logger: true })
      ),
      configuration
    );
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