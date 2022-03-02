import { Request, Response, NextFunction } from 'express'

import { Controller } from '../../modules/user/2-adapters/ports/controller'
import { HttpResponse } from '../../modules/user/2-adapters/ports/http'
import { serverError, badRequest, forbidden } from '../../shared/2-adapters/helpers/http-helper'

export const adaptAuthMiddleware = (controller: Controller) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers['authorization']
      const token = authHeader && authHeader.split(' ')[1];
      
      const request = {accessToken: token};
      const result = await controller.handler(request);
        
      if(result.statusCode !== 200)
       return res.status(result.statusCode).json({
          error: result.body.message
        })
          
      next()

    } catch (httpResponse: HttpResponse | any) {
      return res.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}
