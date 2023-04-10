import express from 'express';
import path from 'path';

const app = express();
app.get("/",(req,res)=>{
    //to access a file we do the following steps
    // res.send("HIII");
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation,"./index.html"));
});
app.listen(5000,()=>{
    console.log("Server is working fine");
})