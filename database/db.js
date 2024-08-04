import mongoose from "mongoose";

export const dbConaction = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HOSPITAL_MANAGEMENT"
    }).then(()=>{
        console.log('connected to database');
    })
    .catch((err)=>{
        console.log(`same error :${err}`);
    });
};
