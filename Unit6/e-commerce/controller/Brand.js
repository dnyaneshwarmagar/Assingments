
const express=require('express');
const router=express.Router();
const Brand=require('../models/brand');


router.get("/",async(req,res)=>{
    try {
        let products=await Brand.find().lean().exec()
         res.status(200).send(products)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/:id",async(req,res)=>{
    
    try {
       let product=await Brand.findOne({_id:req.params.id})
       res.status(200).send(product)
        
    } catch (err) {
        res.status(400).send(err);
    }
})
router.post("/create",async(req,res)=>{
    try {
        let product=await Brand.create(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
        
    
})

router.patch("/:id/update",async(req,res)=>{
    try {
        
        let product=await Brand.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
        
    }

})




module.exports=router;