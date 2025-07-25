import express from "express"
import { storage } from "../middleware/multer.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { productCreate, productDelateone, productDeleteall, productGetall, productGetone, productUpdate } from "../controller/products.controller.js";
const router=express.Router();
router.post("/productCreate",upload.single('img'),productCreate)
router.put("/productUpdate",upload.single('img'),productUpdate)
router.get("/productGetone",productGetone)
router.get("/productGetall",productGetall)
router.delete("/productDeleteone",productDelateone)
router.delete("/productDeleteAll",productDeleteall)
export default router;
