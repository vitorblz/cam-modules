import { Router } from "express";
import { routeExpressAdapter } from "../adapters/route-express-adapter";
import { makeCreateUserController } from "../../modules/user/0-main/make-create-user-controller";
import { makeAllUsersController } from "../../modules/user/0-main/make-all-users-controller";
import { makeAuthMiddleware } from "../../modules/user/0-main/make-auth-middleware";
import { adaptAuthMiddleware } from "../adapters/express-auth-middleware-adapter";

export default function index(route: Router): void
{
   
    route.post('/user',routeExpressAdapter(makeCreateUserController()));
    route.get('/user', adaptAuthMiddleware(makeAuthMiddleware()) , routeExpressAdapter(makeAllUsersController()));

}