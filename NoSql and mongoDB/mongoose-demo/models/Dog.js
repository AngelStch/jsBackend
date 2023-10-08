const mongoose = require("mongoose")

const dogScema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minLength: 3,
        maxLength: 10
    },
    age: Number,
    colour: String,
})

dogScema.methods.bark = function(){
    console.log("barkKkKkK")
}
dogScema.virtual('desription').get(function(){
    return `Dog name: ${this.name} colour:${this.colour} age:${this.age}`
})
dogScema.static('getDogCollection', function(){
    return this.find()
})

const Dog = mongoose.model("Dog", dogScema)
module.exports = Dog;