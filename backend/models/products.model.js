import { model, Schema } from "mongoose";
const adminSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    des: {
      type: String,
    },
    img: {
      type: String,
      require: true,
    },
    // Message:{
    //   type:String
    // },
    // Service:{
    //   Type:String
    // },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Admin = model("Admin", adminSchema);
export { Admin };
