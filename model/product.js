const mongoose=require("mongoose")
const productModel=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nom :String,
    prix:Number,
})
module.exports=mongoose.model("Product",productModel)
