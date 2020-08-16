import express from 'express'
import Product from '../Models/productModel'

const router = express.Router();


router.get("/", async (req,res)=>{
    const products = await Product.find({});
    res.send(products)
})

router.post("/", async (req,res)=>{
    const product = new Product ({
        name: req.body.name,
        image : req.body.image,
        price: req.body.price,
        category: {id :req.body.id, name: req.body.name},
        brand: req.body.brand 
        

    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message:"Product created successfully", data: newProduct});
    }
    return res.status(500).send({message:"Error while creating the product"})

})

export default router;