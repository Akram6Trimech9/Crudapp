const router=require("express").Router()
const productController=require('../Controller/productController')
router.post('/postproduct',productController.createproduct)
router.get('/getallproduct',productController.findallproducts)
router.get('/:id',productController.findproductbyid)
router.patch('/:id',productController.updateProduct)
module.exports=router;