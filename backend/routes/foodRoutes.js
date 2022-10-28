const express = require('express')

const router = express.Router()

const foodController = require("../controllers/foodController")

router.get('/food/:foodName', foodController.GetFoodByName)

module.exports = router;
