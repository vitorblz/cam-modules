import { Router } from "express";
import { HelloController } from "../../modules/user/2-adapters/hello-controller";

import { routeExpressAdapter } from "../adapters/route-express-adapter";
import { makeHelloController } from "../../modules/user/0-main/make-hello-controller";


export default function index(route: Router): void
{
   
    route.get('/',routeExpressAdapter(makeHelloController()));

}