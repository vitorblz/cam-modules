// import { MongoHelper } from "../shared/1-infra/mongo-helper";
import app from "./app";
import env from "./config/env";

import  mongoose from 'mongoose';

mongoose.connect(env.mongoUrl)
  .then(async () => {
    app.listen(5021, ()=>console.log('Server running at 5021'));
  })
  .catch(console.error)


