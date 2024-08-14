import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import bookRoute from  './route/book_route.js'
import userRoute from './route/user_route.js'

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

// defining the routes
app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
