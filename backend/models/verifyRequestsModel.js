import mongoose from "mongoose";


const requestSchema = new mongoose.Schema({
    user: {
        type : mongoose.Types.ObjectId,
        ref: "user",
        required: true,
        unique:true
    },
    sslc:{
        type: String,
        required: true
    },
    plustwo:{
        type: String,
        required: true
    },
    idcard:{
        type: String,
        required: true
    },
},
{timestamps: true}
);


export default mongoose.model("request", requestSchema);
