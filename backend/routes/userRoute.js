const router = require('express').Router()

const {userGetController} = require('../controllers/user/userController')


//define the route here
router.get('/',userGetController)

module.exports = router