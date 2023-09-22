const http = require("http")
const { url } = require("inspector")
const port  = 5000
const server = http.createServer((req, res) =>{
    const {method, url} = req
    console.log("serevr is running")

    console.log(url)
    console.log(method)
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })
    res.write("<h3>hello from the web server</h3>")
    res.end();
})
server.listen(port)
console.log(`server is listening on port ${port}`)
