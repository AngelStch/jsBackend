const http = require("http")
const homeHtml = require("./views/home/index.js")
const siteCss = require("./content/styles/site.js")
const addBread = require("./views/addBreed.js")
const addCat = require("./views/addCat.js")
const catTemplate = require(`./views/home/catTemplte.js`)
const port = 5050
const server = http.createServer((req, res) => {
    const { url } = req

    const cats = [
        {
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4xHiYs4vnhBs9jqjYk0_JY3-SiSavqovXA&usqp=CAU",
            name: "Pesho",
            breed: "ulichna1",
            description: "Very Cute cat!1",

        },
        {
            imageUrl: '',
            name: "Tsunami",
            breed: "ulichna2",
            description: "Very Cute cat!2",

        },
        {
            imageUrl: '',
            name: "Mariq",
            breed: "ulichna3",
            description: "Very Cute cat!3",

        },
        {
            imageUrl:'',
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

        const catHtml = cats.map(cat => catTemplate
        .replace(imageUrlPatern, cat.imageUrl)
        .replace(namePatern, cat.name)
        .replace(breedPatern, cat.breed)
        .replace(descriotionPatern, cat.description))
       const homeHtmlTemplate =  homeHtml.replace(
        "{{cats}}", catHtml)
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(homeHtmlTemplate)
    }
    else if (url === '/content/styles/site.css') {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(siteCss)
    }
    else if (url === '/cats/add-breed') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(addBread)
    }
    else if (url === '/cats/add-cat') {
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(addCat)
    }
    res.end();
})
server.listen(port, () => console.log(`server is Running on port${port}`))