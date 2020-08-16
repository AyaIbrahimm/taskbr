import express from 'express';
import data from './data'

import config from './config'
import mongoose from 'mongoose'
import productModel from './Models/productModel'
import App from '../brantutask/src/App';
import bodyParser from 'body-parser';
import productRoute from './Routes/productRoute'
const mongodbUrl= config.MONGODB_URL

try{
    mongoose.connect(mongodbUrl,{useNewUrlParser:true, useUnifiedTopology:true})
    console.log("Connected to MongoDB")
}
catch(err){
    console.log(err.message)
}

const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRoute)




app.listen(5000,()=>{
    console.log("Server running ");
})