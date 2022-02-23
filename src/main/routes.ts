import { Router, Express } from "express";
import { readdirSync } from 'fs'

export default function importRoutes(app: Express){
    const router = Router();
    app.use('/api',router);
    readdirSync(`${__dirname}/routes`).map(async file => {
        if (!file.includes('.test.')) {
          (await import(`./routes/${file}`)).default(router)
        }
      })
}