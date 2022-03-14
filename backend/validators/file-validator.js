const defaultAllowedExtensionsRegex = /(\.doc|\.docx|\.rtf|\.pdf|\.odt|\.jpeg|\.png|\.gif)$/i;

const validateFiles = (files, extensionsRegex) => {
  const regex = extensionsRegex || defaultAllowedExtensionsRegex;
  for (const file of files) {
    if (!regex.exec(file.originalname)) {
      return false;
    }
  }
  return true;
};
module.exports = { validateFiles };
