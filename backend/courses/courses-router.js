const router = require('express').Router()
const bodyParser = require('body-parser');
const { CoursesController } = require('./courses-controller');

const jsonParser = bodyParser.json();

const coursesController = new CoursesController()
router.post('/', jsonParser,(req, res) => {
  coursesController.addApplicant(req, res)
})

module.exports = { coursesRouter: router }
