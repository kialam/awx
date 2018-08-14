require('dotenv').config();

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);
  await require('./login')(page, scenario);
};
