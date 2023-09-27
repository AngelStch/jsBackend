const fs = require("fs")
 const writeStream = fs.createWriteStream("./output.txt")
 writeStream.write("chunk 1")