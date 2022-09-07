import mongoose from "mongoose";


const profileSchema = new mongoose.Schema({
    user: {
        type : mongoose.Types.ObjectId,
        ref: "user",
        required: true,
        unique:true
    },
    about:{
        type: String
    },
    skills:{
        type: [String]
    },
    photo:{
        type: String
    },
    dateofbirth: {
        type: Date
    },
    education:{
        type: String
    },
    course: {
        type: String
    },
    projects: {
        type: [String]
    },
    experience:{
        type: [String]
    },
    verified:{
        type: Boolean,
        default: false
    }
},
{timestamps: true}
);


export default mongoose.model("profile", profileSchema);
