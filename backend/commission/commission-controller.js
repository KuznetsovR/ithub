const { validateFiles } = require('../validators/file-validator');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');

class CommissionController {
  addApplicant(req, res) {
    try {
      const applicant = req.body;
      applicant.files = req.files;

      this.validateApplicant(applicant);
      this.addToCatalog(applicant.files)

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
  addToCatalog(files){
    const currentTime = Date.now().toString().replaceAll(':', '.')
    console.log(typeof currentTime, currentTime);
    fs.mkdirSync('files/' + currentTime)
    for (const file of files) {
      const filePath = `$../../files/${currentTime}/${file.originalname}`;
      fs.writeFile(filePath, file.buffer, () => {
        console.log('added ', file.originalname);
      });
    }
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
