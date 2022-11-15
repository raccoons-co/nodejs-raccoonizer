import NodejsFramework from "../NodejsFramework";
import Koa from "koa";

/**
 * Represents Koa framework.
 */
export default class KoaFramework
  extends NodejsFramework {

  private app: Koa = new Koa();

  /**
   * Returns Koa application object.
   */
  public application(): Koa {
    return this.app;
  }
}