const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');

class SchoolEventController {
  constructor() {
    this.schools = [];
  }
  addSchool(req, res) {
    try {
      const schoolRequest = req.body
      this.validateSchoolRequest(schoolRequest);
      this.schools.push(req.body)
      console.log(this.schools);
      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect school request data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
    // use mailer
  }
  validateSchoolRequest(schoolRequest) {

    if (
      schoolRequest &&
      validateName(schoolRequest.name) &&
      typeof schoolRequest.schoolName === 'string' &&
      schoolRequest.schoolName.length > 5 &&
      typeof schoolRequest.city === 'string' &&
      schoolRequest.city.length > 0 &&
      validatePhone(schoolRequest.phone) &&
      validateEmail(schoolRequest.email) &&
      schoolRequest.personalDataAccess === true
    ) return true;
    throw new Error('Incorrect school request data');
  }
}

module.exports = { SchoolEventController };
