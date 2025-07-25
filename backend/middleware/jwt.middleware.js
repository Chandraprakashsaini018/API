import jwt from 'jsonwebtoken';
import 'dotenv/config';
export const jwtVerified = async (req,res,next)=>{
let token=req.headers.token;
console.log(token)
let jwtCheck= jwt.verify(token,process.env.SECRET)
console.log(jwtCheck)
if(!jwtCheck){
    return res.status(401).json({data:null,message:"Invalid token",status:false})
}
req.user=jwtCheck;
next();

}

export const jwtGenerator = async (req,res)=>{
    let userdata = JSON.parse(req.userdata);
    return await jwt.sign(userdata, process.env.SECRET, { expiresIn: '1h' });
}