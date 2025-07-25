import express from "express";
import { deletealluser, getAllUser, userDelete, userregister } from "../controller/user.controller.js";
import { jwtVerified } from "../middleware/jwt.middleware.js";
const jaipur=express.Router();
//jaipur.post("/register",register)
jaipur.get("/getalluser",getAllUser)
jaipur.delete("/userdelete",jwtVerified,userDelete)
jaipur.delete("/deleteall",deletealluser)
jaipur.post("/userregister",userregister)
//jaipur.post("/Login",userLogin)
export default jaipur;