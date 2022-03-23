const router = require('express').Router()
const bodyParser = require('body-parser');
const { OpenDayController } = require('./open-day-controller');

const jsonParser = bodyParser.json();

const openDayController = new OpenDayController()

router.post('/', jsonParser,(req, res) => {
  openDayController.addVisitor(req, res)
})


module.exports = { openDayRouter: router }
