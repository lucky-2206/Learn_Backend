import express from 'express';
import path from 'path'
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

app.get("/success",(req,res)=>{
    res.render("success");
    
});
app.post("/contact",(req,res)=>{
    user.push({userName:req.body.name,email:req.body.email});
    
    //instes of redirectiing it and then making another get for success we can direclty render it
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