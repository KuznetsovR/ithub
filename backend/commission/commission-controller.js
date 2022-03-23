const { validateFiles } = require('../validators/file-validator');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');
const { formatData } = require('../utils/data-formatter');

class CommissionController {
  addApplicant(req, res) {
    try {
      const applicant = {
        data: req.body,
        files: req.files,
      };
      this.validateApplicant(applicant);
      this.addToCatalog(applicant);

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
      validateName(applicant?.data?.childName) &&
      validateName(applicant?.data?.parentName) &&
      validatePhone(applicant?.data?.phone) &&
      validateEmail(applicant?.data?.email) &&
      validateFiles(applicant?.files) &&
      applicant?.data?.personalDataAccess === 'true'
    )
      return true;
    throw new Error('Incorrect applicant data');
  }

  addToCatalog(applicant) {
    const currentTime = Date.now().toString().replaceAll(':', '.');
    fs.mkdirSync('files/Commission' + currentTime);
    this.addApplicantFiles(applicant.files, currentTime);
    this.addApplicantData(applicant.data, currentTime);
  }

  addApplicantFiles(files, folderName) {
    for (const file of files) {
      const filePath = `$../../files/Commission/${folderName}/${file.originalname}`;
      fs.writeFile(filePath, file.buffer, () => {});
    }
  }

  addApplicantData(data, folderName) {
    const content = formatData(data);
    fs.writeFile(`$../../files/Commission/${folderName}/data.txt`, content, () => {});
  }
}

module.exports = { CommissionController };
