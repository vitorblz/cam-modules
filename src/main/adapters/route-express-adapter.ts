import { Request, Response } from "express";
import { Controller } from "../../modules/user/2-adapters/ports/controller";
import { HttpResponse } from "../../modules/user/2-adapters/ports/http";

export function routeExpressAdapter(controller: Controller){
    return  async (req: Request, res: Response) =>{
        try {
            const httpResponse: HttpResponse = await controller.handler(req);
            res.status(httpResponse.statusCode).json(httpResponse.body);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

