const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Maitreya:KillerMan@cluster0.sk6ugig.mongodb.net/ScarppedStuff",{useNewUrlParser:true},{useUnifiedTopology:true})

const db=mongoose.connection

db.once("open",function(req,res){
    console.log("COnnected to database")
})

module.exports=db
