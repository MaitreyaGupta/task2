const { text } = require("body-parser")
const { link } = require("fs")
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:Array,
        required:true 
    },
    author:
    {
        type:Array,
        required:true,
    },
    price:{
        type:Array,
        required:true,
    }
})

const book=new mongoose.model("book",userSchema)

module.exports=book 
