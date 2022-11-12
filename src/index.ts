/**
 * Re-export classes to simplify imports
 * from:
 *   import KoaMicroservice from "@raccoons-co/nodejs-raccoonizer/lib/KoaMicroservice";
 * to:
 *   import { KoaMicroservice } from "@raccoons-co/nodejs-raccoonizer";
 */

import ExpressMicroservice from "./ExpressMicroservice"
import HapiMicroservice from "./HapiMicroservice"
import KoaMicroservice from "./KoaMicroservice"
import NestFastifyMicroservice from "./NestFastifyMicroservice"

export {
  ExpressMicroservice,
  HapiMicroservice,
  KoaMicroservice,
  NestFastifyMicroservice
}
