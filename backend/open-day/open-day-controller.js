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
    const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const emailRegex = new RegExp(
      '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'
    );

    if (
      visitor &&
      typeof visitor.name === 'string' &&
      phoneRegex.test(visitor.phone) &&
      emailRegex.test(visitor.email) &&
      typeof visitor.date === 'string' &&
      visitor.personalDataAccess === true
    ) return true;
    throw new Error('Incorrect visitor data');
  }
}

module.exports = { OpenDayController };
