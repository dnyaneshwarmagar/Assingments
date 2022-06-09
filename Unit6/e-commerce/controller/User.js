const express=require('express');
const router=express.Router();
const User=require('../models/User');


router.get("/",async(req,res)=>{
    try {
        let users=await User.find().lean().exec()
         res.status(200).send(users)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/:id",async(req,res)=>{
    
    try {
       let user=await User.findOne({_id:req.params.id})
       res.status(200).send(user)
        
    } catch (err) {
        res.status(400).send(err);
    }
})
router.post("/create",async(req,res)=>{
    try {
        let user=await User.create(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
        
    
})

router.patch("/:id/update",async(req,res)=>{
    try {
        
        let user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
        
    }

})




module.exports=router;