import NodejsFramework from "./NodejsFramework";

export default abstract class AbstractMicroserviceConfiguration {
  abstract accept( framework: NodejsFramework ): void;
}
