const router = require('express').Router()
const albums = require('./routes/albums')
router.use('/albums', albums)


module.exports = router
