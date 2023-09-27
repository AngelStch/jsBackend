const fs = require("fs")
 const input = fs.readFile("./input.txt",{encoding:"utf-8"}, (err,text)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(text)
 })