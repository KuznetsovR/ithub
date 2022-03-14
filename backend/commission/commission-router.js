const router = require('express').Router()
const { CommissionController } = require('./commission-controller');

const commissionController = new CommissionController()

router.post('/', (req, res) => {
  commissionController.addApplicant(req, res)
})

module.exports = { commissionRouter: router }
