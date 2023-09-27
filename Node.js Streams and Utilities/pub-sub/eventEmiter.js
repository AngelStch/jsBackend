const EventEmitter = require("events")
const eventEmitter = new EventEmitter();

eventEmitter.on("kitten-added", () =>{
    console.log("Kitten has been added!")
})
eventEmitter.on("kitten-added", (kittenNAme) =>{
    console.log(`Kitten has been added 2nd time! Its name is ${kittenNAme}`)
})
eventEmitter.on("kitten-removed", () =>{
    console.log("Kitten has been added!")
})

eventEmitter.emit("kitten-added", "puffy")
eventEmitter.emit("kitten-removed")