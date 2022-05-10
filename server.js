const Express=require('express') 
const BodyParser=require('body-parser')
const morgan =require("morgan")
const cors=require("cors")
const mongoose=require('mongoose')
const app =Express()
app.use(cors())
app.use(morgan('tiny'))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true})) ;
const productRoute=require('./Routes/ProductRoute')
app.use('/produit',productRoute)
const url="mongodb://localhost:27017/Crudapp"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(3000,()=>{
console.log('app is running on port',3000)
})
 