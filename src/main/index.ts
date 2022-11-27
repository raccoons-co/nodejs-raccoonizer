// Copyright (c) 2022 Raccoons. All rights reserved. Licensed under the MIT license.
/**
 * A library for unified deploying of Nodejs microservices.
 *
 * @packageDocumentation
 * @public
 */
import MicroserviceFactory from "./MicroserviceFactory";
import Microservice from "./Microservice"

import ExpressMicroserviceFactory from "./express/ExpressMicroserviceFactory";
import ExpressMicroservice from "./express/ExpressMicroservice";

import HapiMicroserviceFactory from "./hapi/HapiMicroserviceFactory";
import HapiMicroservice from "./hapi/HapiMicroservice";

import KoaMicroserviceFactory from "./koa/KoaMicroserviceFactory";
import KoaMicroservice from "./koa/KoaMicroservice";

import NestFastifyMicroserviceFactory from "./nestfastify/NestFastifyMicroserviceFactory";
import NestFastifyMicroservice from "./nestfastify/NestFastifyMicroservice";

export {
  MicroserviceFactory,
  Microservice,
  ExpressMicroserviceFactory,
  ExpressMicroservice,
  HapiMicroserviceFactory,
  HapiMicroservice,
  KoaMicroserviceFactory,
  KoaMicroservice,
  NestFastifyMicroserviceFactory,
  NestFastifyMicroservice
}
