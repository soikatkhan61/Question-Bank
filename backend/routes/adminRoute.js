const router = require('express').Router()

const {AdminModelGetController} = require('../controllers/admin/adminController')


//define the route here
router.get('/',AdminModelGetController)

module.exports = router