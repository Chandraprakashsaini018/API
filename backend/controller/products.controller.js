import { Admin } from "../models/products.model.js";
import bcrypt from "bcrypt";
import { storage } from "../middleware/multer.middleware.js";
const productCreate = async (req, res) => {
  try {
    const {title,des} = req.body;
    const img = req.file.filename;
    const newproduct = await Admin.create({ title,img,des });
    const productdata = await newproduct.save();
    res
      .status(200)
      .json({
        data: productdata,
        message: "Product created successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const productUpdate = async (req, res) => {
  try {
    const { id } = req.query;
    const { title,des } = req.body;
    const img = req.file.filename;
    const productdata = await Admin.findByIdAndUpdate(
      { _id: Object(id) },
      { $set: { title,img,des} },
      { new: true, runValidators: true }
    );
    res
      .status(200)
      .json({
        data: productdata,
        message: "Product Update successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const productGetone = async (req, res) => {
  try {
    const { id } = req.query;
    const productdata = await Admin.findById({ _id: Object(id) });
    res
      .status(200)
      .json({
        data: productdata,
        message: "Product get successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const productGetall = async (req, res) => {
  try {
    const { id } = req.query;
    const productdata = await Admin.find();
    res
      .status(200)
      .json({
        data: productdata,
        message: "Product get successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const productDelateone = async (req, res) => {
  try {
    const { id } = req.query;
    const productdata = await Admin.findOneAndDelete({ _id: Object(id) });
    res
      .status(200)
      .json({
        data: productdata,
        message: "product deleted successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const productDeleteall = async (req, res) => {
  try {
    const { id } = req.query;
    const productdata = await Admin.deleteMany();
    res
      .status(200)
      .json({
        data: productdata,
        message: "product deleted successfully",
        status: true,
      });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};

export {
  productCreate,
  productUpdate,
  productGetone,
  productGetall,
  productDelateone,
  productDeleteall,
};
