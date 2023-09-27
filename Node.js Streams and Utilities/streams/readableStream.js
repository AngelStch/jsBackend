const fs = require("fs")
const path = require("path")
 const readStream = fs.createReadStream("./input.txt", {encoding: "utf-8"})
 const writeStream = fs.createWriteStream(".output.txt")


 readStream.on('data', (chunk) =>{
    console.log(chunk)
    writeStream.write(chunk)
 })

 readStream.on("end", () => {
console.log("reading has finished")
   writeStream.end();
 })