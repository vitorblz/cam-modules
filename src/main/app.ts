import express from 'express';
import importRoutes from './routes';


const app =  express();

app.use(express.json());

importRoutes(app);

export default app;