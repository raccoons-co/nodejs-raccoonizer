import NodejsWebApp from './NodejsWebApp'
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { WebAppModule } from './WebAppModule'

/**
 * Represents NodeJS web application based on NestJS framework.
 */
export default class NestRaccoonizer
    implements NodejsWebApp {

    private webapp: Promise<NestFastifyApplication>;
    private port: number;

    /**
     * Initiates NestRaccoonizer with predefined Express configuration.
     */
    constructor( port: number ) {
        this.webapp = this.newNestInstance();
        this.port = port;
    }

    /**
     * Returns new instance of Nest.js framework with predefined configuration.
     */
    private async newNestInstance(): Promise<NestFastifyApplication> {
         return await NestFactory.create<NestFastifyApplication>(
            WebAppModule,
            new FastifyAdapter({ logger: true })
        );
    }

    /**
     * Runs web application.
     */
    public run(): void {
        this.webapp
            .then(
                (app) => {
                    app.listen(
                        this.port,
                        () => { console.log("Example Nest app listening on port %s", this.port ) }
                    );
                }
            );
    }
}
