const { copyFileSync } = require("fs")
const fs = require("fs/promises")

 const readFilePromise =fs.readFile("./input.txt","utf-8")
 readFilePromise.then((data) => {
    console.log(data)
    
 })