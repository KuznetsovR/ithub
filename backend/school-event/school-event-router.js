const router = require('express').Router()
const bodyParser = require('body-parser');
const { SchoolEventController } = require('./school-event-controller');

const jsonParser = bodyParser.json();

const schoolEventController = new SchoolEventController()
router.post('/', jsonParser,(req, res) => {
  schoolEventController.addSchool(req, res)
})

module.exports = { schoolEventRouter: router }
