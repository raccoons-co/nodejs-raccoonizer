import Command from "./Command";
import NodejsMicroservice from "./NodejsMicroservice";

export default abstract class AbstractInitCommand<T>
  implements Command<T> {

  abstract accept( microservice: NodejsMicroservice<T> ): void;
}
