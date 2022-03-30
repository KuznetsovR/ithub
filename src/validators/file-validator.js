const defaultAllowedExtensionsRegex = /(\.doc|\.docx|\.rtf|\.pdf|\.odt|\.jpeg|\.png|\.gif|\.zip)$/i;

export const validateFiles = (files, extensionsRegex) => {
  const regex = extensionsRegex || defaultAllowedExtensionsRegex;
  for (const file of files) {
    if (!regex.exec(file?.name)) {
      return false;
    }
  }
  return true;
};
