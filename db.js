const mongoose= require('mongoose');

// const mongoURL =`mongodb+srv://jayminprajapati5959:jaimin1902@cluster0.gsls1jf.mongodb.net/`

const mongoURL='mongodb://localhost:27017/hotel'
const db = ()=>{
    
    mongoose.connect(mongoURL/*,{
      useNewUrlParser:true,
     useUnifiedTopology:true,
    }*/).then(()=>{
       console.log( 'MongoDB Connected successfully...');   
    }).catch((error)=>{
       console.log(error);
    })
};

// mongoose.connect(mongoURL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })

// const db = mongoose.collection;

// db.on('Connected',()=>{
//     console.log("connected to database");
// });

// db.on( "error", (err)=>{
//     console.log('erroe in db',err);
//     });

// db.on('disconnected', () => {
//   console.log('Disconnected from Database');
//   });

module.exports = db;

