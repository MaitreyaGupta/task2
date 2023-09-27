const express=require("express")
const mongoose=require("mongoose")
app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.json())
const db=require("./config/mongoose")
const database=require("./modules/Database")
const URL="http://books.toscrape.com/catalogue/page-1.html"
const port=5000
app.listen(port,function(req,res){
    console.log("Listening")
    performScraping()
})




const  name=[] 
const authors=[] 
const price=[]

const cheerio=require("cheerio")
const axeo=require("axios")
 async function performScraping(){
    const axioresponse=await axeo.request({ 
    method: "GET",
    url: "http://books.toscrape.com/catalogue/page-1.html",
    headers: {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
})
const $ = cheerio.load(axioresponse.data)

console.log(axioresponse.data)
 
$(".product_pod").find(".image_container").find(".thumbnail").each((index,element) => {
    const imageContainer=$(element).attr("src")

   

    authors.push(imageContainer)
});
$(".product_pod").find(".star-rating-Two").find(".icon-star").each((index,element) => {
    const imageContainer1=$(element).text()


    name.push(imageContainer1)
});
$(".product_pod").find(".product_price").each((index,element) => {
    const imageContainer2=$(element).text()


    price.push(imageContainer2)
});
console.log(authors)
console.log(name)
console.log(price)
console.log("DOne")
}
performScraping()
 
app.get("/",function(req,res){
    res.render("Index");
})


app.post("/",function(req,res){
    const data={
        author:authors,
        price:price,
        name:name,
    }
  
    database.insertMany(data);
    res.redirect("/")
})

