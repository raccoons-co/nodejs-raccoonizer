import { HapiMicroserviceFactory, NodejsMicroservice } from "../main/index";
import Hapi from "@hapi/hapi";

export default class YourHapiConfiguration
  extends HapiMicroserviceFactory {

  accept( microservice: NodejsMicroservice<Hapi.Server> ): void {
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