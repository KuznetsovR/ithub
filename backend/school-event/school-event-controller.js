const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');
const { formatData } = require('../utils/data-formatter');

class SchoolEventController {
  addSchool(req, res) {
    try {
      const schoolRequest = req.body;
      this.validateSchoolRequest(schoolRequest);
      this.addToCatalog(schoolRequest);

      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect school request data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
  }
  validateSchoolRequest(schoolRequest) {
    if (
      schoolRequest &&
      validateName(schoolRequest.name) &&
      typeof schoolRequest.schoolName === 'string' &&
      schoolRequest.schoolName.length > 0 &&
      typeof schoolRequest.city === 'string' &&
      schoolRequest.city.length > 0 &&
      validatePhone(schoolRequest.phone) &&
      validateEmail(schoolRequest.email) &&
      schoolRequest.personalDataAccess === true
    )
      return true;
    throw new Error('Incorrect school request data');
  }

  addToCatalog(school) {
    const currentTime = Date.now().toString().replaceAll(':', '.');
    fs.mkdirSync('files/Schools/' + currentTime);
    this.addSchoolData(school, currentTime);
  }

  addSchoolData(data, folderName) {
    const content = formatData(data);
    fs.writeFile(`$../../files/Schools/${folderName}/data.txt`, content, () => {});
  }
}

module.exports = { SchoolEventController };
