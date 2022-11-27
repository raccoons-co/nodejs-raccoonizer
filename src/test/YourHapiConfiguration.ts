import { HapiMicroserviceFactory, HapiMicroservice } from "../main/index";
import Hapi from "@hapi/hapi";

export default class YourHapiConfiguration
  extends HapiMicroserviceFactory {

  public execute( microservice: HapiMicroservice ): void {
    microservice.application()
      .route({
        method: 'GET',
        path: '/',
        handler: ( request: Hapi.Request, h: Hapi.ResponseToolkit ) => {
          return 'Hello World!';
        }
      });
  }
}