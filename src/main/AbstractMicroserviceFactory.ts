import Microservice from "./Microservice";

export default interface AbstractMicroserviceFactory {
  microservice( atPort: number ): Microservice;
}