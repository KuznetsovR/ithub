// Important: name here is 'lastname firstname patronymic'

const minNameLength = 5;
const maxNameLength = 200;

const validateName = (name) => {
  return typeof name === 'string' && name.length >= minNameLength && name.length <= maxNameLength;
};

module.exports = { validateName };
