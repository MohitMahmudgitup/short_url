const express = require('express')
const router = express.Router()
const {handleGenerateNewShorURL} = require('../controllers/url')

router.post('/',handleGenerateNewShorURL)

module.exports = router