const express = require("express")
const res = require("express/lib/response.js")
const app = express()
const path = require("path")
const port = 5050

const bodyParser = express.urlencoded({extended: false})
app.use(bodyParser)

const staticFile = express.static('public')
app.use(staticFile)

app.use((req,res, next) =>{
    console.log(`HTTP Request: ${req.method}, Request path: ${req.path}`)
    next()
})
app.use('/kittens', (req,res, next) =>{
    console.log("kittens midleware is involked")
    next()
})
app.get('/specific',(req,res, next) =>{
console.log("thos is the specific routeMIddle ware")
next()
} ,(req, res) =>{
    res.send("This is specific route")
})



app.get('/', (req, res) =>{
    res.send("Home page")
})
//app.post('/public/css/style.css', (req, res) =>{
//    res.sendFile(path.resolve(__dirname,"public/css","style.css")) 
//})
app.get('/kittens', (req, res) =>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css">

        <title>Document</title>
    </head>
    <body>
        <form method="post">
            <label for="fname">First name:</label>
            <br>
            <input type="text" id="fname" name="fname">
            <br>
            <label for="age">Age:</label>
            <br>
            <input type="text" id="age" name="age">
            <br>
            <br>
            <input type="submit" value="Create Kitten">
          </form> 
    </body>
    </html>`)
})
app.post('/kittens', (req, res) =>{
    console.log(req.body)
    res.send("Kitten is created")
    
})

app.get('/kittens/:kittenId', (req, res) =>{
     const idKitten =Number(req.params.kittenId)
     if(!idKitten){
        res.status(404).send("incorect id : "+ req.params.kittenId)
        return
     }
        res.send({id: idKitten, name:"Kircho"+idKitten}) 
})

app.get("/download-png", (req,res)=>{
   // res.download("./cactus.png")
   // res.attachment("./cactus.png")
   // res.end();
   // res.sendFile(path.resolve(__dirname,"./cactus.png"))
})
app.get('/route-that-will-be-redirected', (req, res) =>{
    res.redirect("/kittens")
    
})
app.get('*', (req, res) =>{
    res.status(404)
    res.send("Incorect path")
    
})

app.listen(port, () => console.log(`post is running on ${port}`))