import Hapi from '@hapi/hapi';
import NodejsWebApp from './NodejsWebApp';

/**
 * Represents NodeJS web application based on HapiJS framework.
 */
export default class NodejsHapiMicroservice
  implements NodejsWebApp {

  private microservice: any;

  /**
   * Initiates NodejsHapiMicroservice with NodeJS Hapi framwork.
   */
  constructor( socket: number ) {
    this.microservice = new Hapi.Server({ port: socket });;
    this.addConfiguration();
  }

  private addConfiguration () {
    this.microservice
    .route({
      method: 'GET',
      path: '/',
      handler: (request: any, h: any) => { return 'Hello World!'; }
    });
  }

  public async run(): Promise<void> {
    await this.microservice.start();
    console.log("%s listening on %s", this.constructor.name, this.microservice.info.uri);
  }
}
