const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://maitreyaguptaa:killerman@devs.syeiknh.mongodb.net/Starter1",{useNewUrlParser:true},{useUnifiedTopology:true})

const db=mongoose.connection

db.once("open",function(req,res){
    console.log("COnnected to database")
})

module.exports=db
