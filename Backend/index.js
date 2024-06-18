const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')



const app = express()

dotenv.config()
app.use(cors());

app.use(express.json())



const port = process.env.PORT || 4001
const URI = process.env.MONGODB_URI






// connect to mongoDB
try {
    mongoose.connect(URI);
    console.log('Connected to MongoDB')
} catch (error) {
    console.log('Error connecting to MongoDB ',error);
}

app.use("/book",require('./route/book_route.js'))
app.use("/users",require('./route/user_route.js'))


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
