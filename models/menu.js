const mongoose = require('mongoose');


const menuScheema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

});

const menu = mongoose.model('menu', menuScheema);

module.exports=menu;