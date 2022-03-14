const defaultAllowedExtensionsRegex = /(\.doc|\.docx|\.rtf|\.pdf|\.odt|\.jpeg|\.png|\.gif)$/i;

const validateFile = (file, extensionsRegex) => {
  const regex = extensionsRegex || defaultAllowedExtensionsRegex;
  const filePath = file.name;
  return regex.exec(filePath);
};
module.exports = { validateFile };
