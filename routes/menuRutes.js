const express=require('express');

const router = express.Router();
const menu = require(`./../models/menu`);


router.post('/',async(req,res)=>{
    try{
      const data = req.body;
      const newMenu = new menu(data);
      const savedmenu = await  newMenu.save();
      console.log("data save");
      res.status(200).json(savedmenu);
    }catch(err){
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.get('/',async (req,res)=>{
    try{
      const data=await menu.find();
      console.log('data fatch');
      res.status(200).json(data);
  
    }catch(err){
      console.log(err);
      res.status(500).json(err);
    }
  });
  router.put( '/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const updateField = req.body;
      const response = await menu.findByIdAndUpdate(personId,updateField ,{
        new:true,
        runValidators:true
      }) ;
      console.log('data updated');
      res.status(200).json(response);
      if (!response) {
        return res.status(404).json({ message: 'Person not found!' });
        
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

  router.delete( "/:id", async (req, res) => {
try {
    const id = req.params.id;
const reminder = await menu.findOneAndDelete(id);
if(!reminder) {
    return res.status(404).json({message:"No Menu with this ID"});
}
console.log('data deleted');
res.status(200).json({message:'person deleted success'});

    
} catch (err) {
    console.log(err);
    res.status(500).json(err);
}    
  })
module.exports=router;