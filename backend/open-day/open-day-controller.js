const { formatData } = require('../utils/data-formatter');
const { validateName } = require('../validators/name-validator');
const { validateEmail } = require('../validators/email-validator');
const { validatePhone } = require('../validators/phone-validator');
const fs = require('fs');

class OpenDayController {
  addVisitor(req, res) {
    try {
      const visitor = req.body
      this.validateVisitor(visitor);
      this.addToCatalog(visitor)
      res.status(201).send();
    } catch (e) {
      if (e.message === 'Incorrect visitor data') {
        res.status(400).send();
      } else {
        throw e;
      }
    }
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
  addToCatalog(visitor) {
    const currentTime = Date.now().toString().replaceAll(':', '.');
    fs.mkdirSync('files/OpenDayVisitors/' + currentTime);
    this.addSchoolData(visitor, currentTime);
  }

  addSchoolData(data, folderName) {
    const content = formatData(data);
    fs.writeFile(`$../../files/OpenDayVisitors/${folderName}/data.txt`, content, () => {});
  }
}

module.exports = { OpenDayController };
