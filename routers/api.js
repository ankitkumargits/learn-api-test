const router = require('express').Router();
const Product = require("../models/productSchema");

router.get("/", async(req, res)=>{
    try{
        const productData = await Product.find();
        // res.send("Your Gonna be okay like that db")
        res.status(200).json(productData);
    }catch(err){
        res.status(400).json(message= err.message);
    }
    
});

router.post("/", async(req, res)=>{
    const{name, desc, price}=req.body;
    console.log(req.body)
    const productData = new Product({pName:name, 
        pDesc:desc,
        pPrice:price
    });
    console.log(productData);
    try{
        await productData.save();
        res.status(201).json(productData);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get("/:id", async(req, res)=>{
    const id = req.params.id;
    const productData = await Product.findById(id);
    res.status(200).json(productData);

});

router.delete("/:id", async(req, res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Your Item successfully deleted"})
});

module.exports = router;