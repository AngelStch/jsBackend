const mongoose = require("mongoose")
const Dog = require("./models/Dog.js")
const connectionString = "mongodb://127.0.0.1:27017"
const dataBase = "DogsDB"
async function connectDb() {
mongoose.connect(`${connectionString}/${dataBase}`)
console.log(`You have been connected to the database ${dataBase}`)

/*
dogs.forEach((dog) => dog.bark())
dogs.forEach((dog) => console.log(dog.desription))
*/
// const d = await Dog.getDogCollection()
// console.log(d)


// const newDog = await Dog.create({name:"sasho",age: 13,colour:"orange"})
// console.log(newDog)

// await Dog.updateOne({name:'Roshko'},{age: 3000})
 

// const dog =await Dog.findById(dogID)
// dog.age = 44
// dog.colour = "green"
// dog.save()
// await Dog.findByIdAndUpdate(dogID,{name: "po"})

const dogID ="6522a2c9e37857555982ac7e"
await Dog.findByIdAndDelete(dogID)
const dogs = await Dog.find()
console.log(dogs)
}
connectDb();