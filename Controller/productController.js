const mongoose=require('mongoose')
const productModel=require('../model/product')
exports.createproduct=function(req,res){
 const produit=new productModel({
     _id:mongoose.Types.ObjectId(), 
     nom : req.body.nom ,
     prix:req.body.prix
 })
 produit.save()
   .then(resultat=>{
        if(resultat){
          res.status(201).json(resultat)
        }
        else{
            res.status(404).json({message:'there is an error '})
        }
   })
   .catch(err=>{
       res.status(401).json(err)
   })
}
exports.findallproducts=function(req,res){
    productModel.find()
    .then(resultat=>{
        if(resultat){
            res.status(201).json(resultat)
        }else{
            res.status(404).json({message:'there is an error '})
        }
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.findproductbyid=function(req,res){
    productModel.findById(req.params.id)
    .then(resultat=>{
        if(resultat){
            res.status(201).json(resultat)
        }else{
            res.status(404).json({message:'there is an error '})
        }
    })
    .catch(err=>{
        res.send(err)
    })}
exports.updateProduct=function(req,res){
    productModel.findByIdAndUpdate(req.params.id,{
        nom :req.body.nom,
        prix :req.body.prix
    })
    .then(resultat=>{
        if(resultat){
            res.status(201).json(resultat)
        }else{
            res.status(404).json({message:'there is an error '})
        }
    })
    .catch(err=>{
        res.send(err)
    })}


//lkhedma 
//.exec()
//.then()
//.catch()