const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');

class OpenDayController {
  constructor() {
    this.visitors = [];
  }
  addVisitor(req, res) {
    try {
      const visitor = req.body
      this.validateVisitor(visitor);
      this.visitors.push(req.body)
      console.log(this.visitors);
      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect visitor data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
    // use mailer
  }
  validateVisitor(visitor) {
    if (
      visitor &&
      validateName(visitor.name) &&
      validatePhone(visitor.phone) &&
      validateEmail(visitor.email) &&
      typeof visitor.date === 'string' &&
      visitor.personalDataAccess === true
    ) return true;
    throw new Error('Incorrect visitor data');
  }
}

module.exports = { OpenDayController };
