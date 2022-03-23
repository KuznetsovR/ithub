const { formatData } = require('../utils/data-formatter');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');

class CoursesController {
  addApplicant(req, res) {
    try {
      const applicant = req.body
      this.validateApplicant(applicant);
      this.addToCatalog(applicant)
      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect applicant data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
  }
  validateApplicant(applicant) {
    if (
      applicant &&
      validateName(applicant.childName) &&
      validateName(applicant.parentName) &&
      validatePhone(applicant.phone) &&
      validateEmail(applicant.email) &&
      applicant.personalDataAccess === true
    ) return true;
    throw new Error('Incorrect applicant data');
  }
  addToCatalog(applicant) {
    const currentTime = Date.now().toString().replaceAll(':', '.');
    fs.mkdirSync('files/Courses/' + currentTime);
    this.addApplicantData(applicant, currentTime);
  }

  addApplicantData(data, folderName) {
    const content = formatData(data);
    fs.writeFile(`$../../files/Courses/${folderName}/data.txt`, content, () => {});
  }
}

module.exports = { CoursesController };
