const http = require("http")
const fs = require("fs/promises")

const port = 5050
const server = http.createServer(async(req, res) => {
    const { url } = req

    const cats = [
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4xHiYs4vnhBs9jqjYk0_JY3-SiSavqovXA&usqp=CAU",
            name: "Pesho",
            breed: "ulichna1",
            description: "Very Cute cat!1",

        },
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4xHiYs4vnhBs9jqjYk0_JY3-SiSavqovXA&usqp=CAU",
            name: "Tsunami",
            breed: "ulichna2",
            description: "Very Cute cat!2",

        },
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4xHiYs4vnhBs9jqjYk0_JY3-SiSavqovXA&usqp=CAU",
            name: "Mariq",
            breed: "ulichna3",
            description: "Very Cute cat!3",

        },
        {
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4xHiYs4vnhBs9jqjYk0_JY3-SiSavqovXA&usqp=CAU",
            name:"Dancho",
            breed:"ulichna4",
            description:"Very Cute cat!4",
            
        }
    ]
    if (url === '/') {
        let imageUrlPatern = /{{imageUrl}}/g
        let namePatern = /{{name}}/g
        let breedPatern = /{{breed}}/g
        let descriotionPatern = /{{description}}/g
    const catTemplate = await fs.readFile('./views/home/catTemplte.html',"utf-8")
    const homeHtml =await fs.readFile('./views/home/index.html',"utf-8")


        const catHtml = cats.map(cat => catTemplate
        .replace(imageUrlPatern, cat.imageUrl)
        .replace(namePatern, cat.name)
        .replace(breedPatern, cat.breed)
        .replace(descriotionPatern, cat.description)).join("")

 
       const homeHtmlTemplate =  homeHtml.replace("{{cats}}", catHtml)
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeHtmlTemplate)
    }
    else if (url === '/content/styles/site.css') {
        const siteCss =await fs.readFile('./content/styles/site.css',"utf-8")
        console.log(siteCss)
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(siteCss)

    }
    else if (url === '/cats/add-breed') {
       const addBread =await fs.readFile('./views/home/addBreed.html',"utf-8")
       res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(addBread)
    }
    else if (url === '/cats/add-cat') {
        const addCat =await fs.readFile('./views/home/addCat.html',"utf-8")
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(addCat)
    }
    res.end();
})
server.listen(port, () => console.log(`server is Running on port${port}`))