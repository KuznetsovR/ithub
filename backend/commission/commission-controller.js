const { validateFile } = require('../validators/file-validator');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');

class CommissionController {
  constructor() {
    this.applicants = [];
  }
  addApplicant(req, res) {
    // try {
    //   const applicant = req.body
    //   console.log(applicant);
    //   this.validateApplicant(applicant);
    //   this.applicants.push(req.body)
    //   console.log(this.applicants);
    //   res.status(201).send();
    // } catch (e) {
    //   if (e.message === 'Incorrect applicant data') {
    //     res.status(400).send();
    //   } else {
    //     throw e;
    //   }
    // }
    // use mailer
  }
  validateApplicant(applicant) {
    if (
      applicant &&
      validateName(applicant.childName) &&
      validateName(applicant.parentName) &&
      validatePhone(applicant.phone) &&
      validateEmail(applicant.email) &&
      validateFile(applicant.application) &&
      validateFile(applicant.passportPhoto) &&
      validateFile(applicant.schoolRecordsPhoto) &&
      applicant.personalDataAccess === true
    ) return true;
    throw new Error('Incorrect applicant data');
  }
}

module.exports = { CommissionController };
