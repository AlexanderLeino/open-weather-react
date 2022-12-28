const router = require('express').Router()
const weatherRoutes = require('./api/weather')

router.use('/api', weatherRoutes)

module.exports = router