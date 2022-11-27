import NodejsMicroservice from "../NodejsMicroservice";
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import Microservice from "../Microservice";
import AbstractCommand from "../AbstractCommand";
import NestFastifyDeployCommand from "./NestFastifyDeployCommand";

/**
 * A NestFastify Nodejs microservice that applies your configuration class.
 */
export default class NestFastifyMicroservice
  extends NodejsMicroservice<Promise<NestFastifyApplication>>
  implements Microservice {

  /** The microservice will listen this port. */
  private port: number;

  /**
   * Initiates instance with port number to listen and your configuration class instance.
   *
   * @param port The microservice will listen this port.
   * @param command Your configuration class instance.
   */
  constructor( port: number, command: AbstractCommand<NestFastifyMicroservice>, AppModule: unknown ) {

    super( NestFactory.create<NestFastifyApplication>( AppModule, new FastifyAdapter( { logger: true } ) ));
    this.port = port;
    command.execute( this );
  }

  /**
   * Puts the microservice into operation.
   */
  public deploy(): void {
    new NestFastifyDeployCommand( this.port ).execute( this );
  }
}
