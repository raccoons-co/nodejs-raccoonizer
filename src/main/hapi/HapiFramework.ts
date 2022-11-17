import NodejsFramework from "../NodejsFramework";
import Hapi from "@hapi/hapi";

/**
 * Represents Hapi framework.
 */
export default class HapiFramework
  extends NodejsFramework {

  private app: Hapi.Server = new Hapi.Server( { autoListen: false } );

  /**
   * Returns Hapi application object.
   */
  public application(): Hapi.Server {
    return this.app;
  }
}