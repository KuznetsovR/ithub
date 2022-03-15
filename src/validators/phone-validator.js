const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export const validatePhone = (phone) => {
  return phoneRegex.test(phone);
};

