import express from 'express';
import path from 'path'
const app = express();

//the below line is used when we are statically using a file
app.use(express.static(path.join(path.resolve(),"public")));

//setting up view engine
app.set("view engine","ejs");


/*{Eihter we can first set up the view engine using the above command and then pass only index 
or we can direclty write index.ejs}*/

// render method is used we we gave dynamic file like we have send name here
// to send static file like img we first make a public folder and make a file in it


app.get("/",(req,res)=>{
    // res.render("index",{name:"Vaibhav"});
    res.send(index.html);
});
app.listen(5000,()=>{ 
    console.log("Server is working fine");
})