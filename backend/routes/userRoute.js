const router = require('express').Router()

const {userGetController} = require('../controllers/userController')


//define the route here
router.get('/:userId',userGetController)

module.exports = router