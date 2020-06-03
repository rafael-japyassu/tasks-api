import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors'
import routes from "./routes";

const app = express()
createConnection()
app.use(cors())
app.use(bodyParser.json())
app.use(routes)


app.listen(3333)
