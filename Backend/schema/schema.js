import mongoose from 'mongoose';

const mydata =new mongoose.Schema({
    jobdescription:{
        type:String,
    },
    position:{
        type:String,
    },
    department:{
        type:String,
    },
    JobLocation:{
        type:String,
    },
    qulification:{
        type:String,
    },
    experience:{
        type:String,
    },
    time:{
        type:String,
    },
    JobPurpose:{
        type:String,
    },
    JobResponsibility:{
        type:String,
    },
    Requirement:{
        type:String,
    },
    Skills:{
        type:String,
    },
    Preference:{
        type:String,
    }
})
const addData=mongoose.model("addData",mydata)
export default addData;