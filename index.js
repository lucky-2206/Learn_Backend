//How to make a server
import http from "http";
import {calc} from './features.js'
import { readFileSync } from "fs";

//Reading a file we have to use fs module 
// We will call read function syncronously
const home = readFileSync('./index.html')
const server = http.createServer((req,res)=>{
    if(req.url==='/about')
        res.end(`<h1>${calc()} is your Love Percentage</h1>`);    
    else if(req.url==='/')
        res.end(home);
    else if(req.url==='/contact')
        res.end("<h1>Contact Page</h1>");
    else
        res.end("<h1>Page Not Found</h1>");
});

server.listen(5000,()=>{
    console.log("server is working properly");
})