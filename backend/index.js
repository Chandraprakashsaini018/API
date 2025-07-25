import express from "express";
import router from "./routes/products.routes.js";
import"dotenv/config"
import "./db/connection.js"
import bodyParser  from 'body-parser';
import cors from "cors"
import jaipur from "./routes/user.routes.js";
const app=express();
app.use(cors())
app.use(express.static('upload'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
const port=process.env.port;
app.use("/user",router)
app.use("/jaipur",jaipur)
app.listen(port,()=>console.log(port));


