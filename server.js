import express from 'express';
import cors from 'cors';
import helloController from "./controller/hello-controller.js";
import userController from "./controller/user-controller.js";
import tuitsController from "./controller/tuits-controller.js";
import mongoose from "mongoose"


// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
const CONNECTION_STRING = 'mongodb+srv://JOJOAPP:jojomongoapp@cluster0.4hfhh.mongodb.net/myFirstDatabase'
mongoose.connect(CONNECTION_STRING);



const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);