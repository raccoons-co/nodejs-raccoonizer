import NodejsFramework from "../NodejsFramework";
import express from "express";

/**
 * Represents Express framework.
 */
export default class ExpressFramework
  extends NodejsFramework {

  private app: express.Express = express();

  /**
   * Returns Express application object.
   */
  public application() {
    return this.app;
  }
}