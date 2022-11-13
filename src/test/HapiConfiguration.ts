import { NodejsFrameworkConfiguration } from "../main/index";
import Hapi from "@hapi/hapi";

export default class HapiConfiguration implements NodejsFrameworkConfiguration<Hapi.Server> {
  applyTo( hapiInstance: Hapi.Server ): void {
    hapiInstance
      .route({
        method: 'GET',
        path: '/',
        handler: ( request: Hapi.Request, h: Hapi.ResponseToolkit ) => {
          return 'Hello World!';
        }
      });
  }
}