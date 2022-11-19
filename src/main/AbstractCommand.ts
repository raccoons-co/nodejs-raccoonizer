import Command from "./Command";
import NodejsMicroservice from "./NodejsMicroservice";

export default abstract class AbstractCommand<T>
  implements Command<NodejsMicroservice<T>> {

  abstract execute( microservice: NodejsMicroservice<T> ): void;
}
