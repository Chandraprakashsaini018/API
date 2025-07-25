import { jwtGenerator } from "../middleware/jwt.middleware.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
// const register = async (req, res) => {
//   try {
//     let { Name, Service,email, Mobile,Message } = req.body;
//    // password = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       Name,
//       Service,
//       email,
//       Mobile,
//       Message,
//     });
 
//     const userdata = await newUser.save();
//     console.log(register)
//     console.log(userdata);
//     res.status(200).json({
//       data: userdata,
//       message: "User register successfully",
//       status: true,
//     });
//   } catch (err) {
//     res.status(500).json({ data: null, message: err.message, status: false });
//   }
// };
const userregister = async (req, res) => {
  try {
    let { Name, Service,email, Mobile,Message } = req.body;
   // password = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      Name,
      Service,
      email,
      Mobile,
      Message,
    });
 
    const userdata = await newUser.save();
    console.log(userregister)
    console.log(userdata);
    res.status(200).json({
      data: userdata,
      message: "User register successfully",
      status: true,
    });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
// const userLogin = async (req, res) => {
//   try {
//     const { email, } = req.body;
//     //email check
//     const userdata = await User.findOne({ email });
//     console.log(userdata);

//     if (!userdata) {
//       res
//         .status(400)
//         .json({ data: null, message: "User does't exists", status: false });
//     }
//     //password check 
//     const matchPassword = await bcrypt.compare(password,userdata.password);
//     console.log(matchPassword);
//     if (!matchPassword) {
//       res
//         .status(400)
//         .json({ data: null, message: "Password is incorrect", status: false });
//     }

//     //token gen.
//     req.userdata = JSON.stringify(userdata);
//     let jwtToken = await jwtGenerator(req,res);

//     res.status(200).json({
//       data: {userdata,jwtToken},
//       message: "User login successfully",
//       status: true,
//     });
//   } catch (err) {
//     res.status(500).json({ data: null, message: err.message, status: false });
//   }
// };

const getAllUser = async (req, res) => {
  try {
    const userdata = await User.find();
    res.status(200).json({
      data: userdata,
      message: "User data get successfully",
      status: true,
    });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const deletealluser = async (req, res) => {
  try {
    const {id}=req.query
    const userdata = await User.deleteMany();
    res.status(200).json({
      data: userdata,
      message: "User data get successfully",
      status: true,
    });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};
const userDelete = async (req, res) => {
  try {
    const  id  = req.user._id;
    console.log(id);
    const userdata = await User.findById({ _id: Object(id) });
    console.log(userdata);
    if (!userdata) {
      res
        .status(400)
        .json({ data: null, message: "User does't exists", status: false });
    }
    const userDel = await User.deleteOne({ _id: Object(id) });
    res.status(200).json({
      data: userDel,
      message: "User deleted successfully",
      status: true,
    });
  } catch (err) {
    res.status(500).json({ data: null, message: err.message, status: false });
  }
};

export { userregister, getAllUser, userDelete ,deletealluser};