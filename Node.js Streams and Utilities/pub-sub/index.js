const eventBus = require("./eventBus.js")
eventBus.subscribe("kitten-added", () =>{
    console.log("Kitten has been added!")
})
eventBus.subscribe("kitten-added", (kittenNAme) =>{
    console.log(`Kitten has been added 2nd time! Its name is ${kittenNAme}`)
})
eventBus.subscribe("kitten-removed", () =>{
    console.log("Kitten has been added!")
})

eventBus.publish("kitten-added", "puffy")