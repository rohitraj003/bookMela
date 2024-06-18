const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    category:{
        type: String
    },
    title:{
        type: String
    },
    img:{
        type: String
    }

})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book

