import express from 'express';
import path from 'path'
import mongoose from 'mongoose';
import { name } from 'ejs';

// to connect mongoose
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName :'test',

})
.then((c)=>console.log("Database Connected"))
.catch((e)=> console.log(e));

// creating a schema 
const messageSchema = new mongoose.Schema({
    name:String,
    email:String
})

const Message = mongoose.model("Message",messageSchema);



const app = express();


//the below line is used when we are statically using a file
app.use(express.static(path.join(path.resolve(),"public")));

//using middleware
app.use(express.urlencoded({extended:true}));
//setting up view engine
app.set("view engine","ejs");

const user=[];
/*{Eihter we can first set up the view engine using the above command and then pass only index 
or we can direclty write index.ejs}*/

// render method is used we we gave dynamic file like we have send name here
// to send static file like img we first make a public folder and make a file in it


app.get("/",(req,res)=>{
    res.render("index");
    
});

app.get("/add", async (req,res)=>{
    await Message.create({name:"Vaibhav",email:"hey@2gmail.com"})
    res.send("Done");
});

app.get("/success",(req,res)=>{
    res.render("success");
    
});
app.post("/contact",async (req,res)=>{
    const {name,email} = req.body;
    const formData=({name:name,email:email});
    console.log(formData)
    await Message.create(formData)
    //instead of redirectiing it and then making another get for success we can direclty render it
    // res.render("success");
    res.redirect("/success");
})

// here we are considering our array as api can get the data by visiting the url http://localhost:5000/users
app.get("/users",(req,res)=>{
    res.json({user});
})
const port = 5000;
app.listen(port,()=>{ 
    console.log("Server is working fine on port", port);
})