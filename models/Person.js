const mongoose=require('mongoose');


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['Engineer','Doctor','Teacher'],
        required:true
    },
    email:{
        type: String, 
        unique: true, 
        required:true
    },
    mobile:{
        type: String,
        // minlength:10,
        // maxlength:12,
        required:true
    },
    address:{
      
        type:String
    }
    ,
    salary:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        // enum:['Engineer','gandhinagar','unjha'],
        required:true
    }


});


//create model
const Person = mongoose.model("Person",personSchema);

module.exports=Person;
