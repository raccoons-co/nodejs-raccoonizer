import { HapiMicroserviceFactory, HapiFramework } from "../main/index";
import Hapi from "@hapi/hapi";

export default class YourHapiConfiguration
  extends HapiMicroserviceFactory {

  accept( hapiFramework: HapiFramework ): void {
    hapiFramework.application()
      .route({
        method: 'GET',
        path: '/',
        handler: ( request: Hapi.Request, h: Hapi.ResponseToolkit ) => {
          return 'Hello World!';
        }
      });
  }
}