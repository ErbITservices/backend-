// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('jaimin.text','jaimin',function (err) {
//     console.log(err);})

// const js ={name:"jhoi" , age:20, city:"beijing"};
// let obj=JSON.stringify(js);
//  console.log(obj);
require("dotenv").config();
const express = require('express')
const app = express()
const db = require("./db");
const cors = require('cors');
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRutes');
const formRouter=require('./routes/fromRutes')
const base_url= process.env.BASE;







// app.get('/', function (req, res) {
//   res.send('Hello jaimin')
// })

const corsOptions ={
  origin:`${base_url}`||'http://localhost:5174',
  // methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,            //access-control-allow-credentials:true
 
}


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/person",personRoutes);
app.use('/menu',menuRoutes) ;
app.use('/form',formRouter) ;




db(app.listen(3333, () => {
  console.log("jaimin server is run on port 3333");
  console.log(base_url);
  
}))

exports.app = app;