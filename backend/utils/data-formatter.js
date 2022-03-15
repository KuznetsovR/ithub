const { EN_RU_TRANSLATION } = require('../translations/english-russian');

const formatData = (data) => {
  // removing personalDataAccess from data
  const { personalDataAccess, ...formattedData } = data;
  let content = '';

  for (const [key, value] of Object.entries(formattedData)) {
    if (EN_RU_TRANSLATION[key]) {
      content += `${EN_RU_TRANSLATION[key]}: ${value} \n`;
    } else {
      content += `${key}: ${value} \n`;
    }
  }
  return content
}

module.exports = {formatData}
