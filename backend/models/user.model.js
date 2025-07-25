import  {model, Schema} from "mongoose";
const userSchema = new Schema({
    Name:{
        type:String,

    },
    Mobile:{
        type:Number,
    },
    email:{
        type:String,
        require:true
    },
    Service:{
        type:String,
    },
    Message:{
        type:String
    },
    role:{
        type:String,
        enum:["Admin","user"],
        default:"user"
    },
},{
    timestamps:true,
})

const User=model("User",userSchema);
export {User}