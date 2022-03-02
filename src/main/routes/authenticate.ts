import { Router } from "express";
import { makeLoginController } from "../../modules/user/0-main/make-login-controller";

import { routeExpressAdapter } from "../adapters/route-express-adapter";

export default function index(route: Router): void
{
    route.post('/login',routeExpressAdapter(makeLoginController()));
}