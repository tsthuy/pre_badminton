import express from "express";
import bodyParser from "body-parser";
// query param
import viewEngine from "./config/viewEngine"
import initWebRouters from "./route/web"


let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
viewEngine(app);
initWebRouters(app);
