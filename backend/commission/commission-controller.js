const { validateFiles } = require('../validators/file-validator');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');

class CommissionController {
  constructor() {
    this.applicants = [];
  }
  addApplicant(req, res) {
    try {
      const applicant = req.body;
      applicant.files = req.files;
      this.validateApplicant(applicant);
      this.applicants.push(req.body);
      for (const file of applicant.files) {
        const filePath = `$../../files/${file.originalname}`;
        fs.writeFile(filePath, file.buffer, () => {});
      }
      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect applicant data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
    // use mailer
  }
  validateApplicant(applicant) {
    if (
      applicant &&
      validateName(applicant.childName) &&
      validateName(applicant.parentName) &&
      validatePhone(applicant.phone) &&
      validateEmail(applicant.email) &&
      validateFiles(applicant.files) &&
      applicant.personalDataAccess === 'true'
    )
      return true;
    throw new Error('Incorrect applicant data');
  }
}

module.exports = { CommissionController };
