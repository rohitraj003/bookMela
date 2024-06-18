const express = require('express')
const { getBook } = require('../controller/book_controller.js')


const router = express.Router();

router.get("/",getBook)

module.exports = router 