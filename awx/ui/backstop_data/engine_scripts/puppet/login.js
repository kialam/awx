const dotenv = require('dotenv').config();

module.exports = async function (page, scenario) {

  const login = async () => {
    await page.goto(scenario.referenceUrl, {waitUntil: 'networkidle2'})
    await page.type('#login-username', process.env.LOCAL_TOWER_USER)
    await page.type('#login-password', process.env.LOCAL_TOWER_PASSWORD)
    await page.click('button#login-button')
    await page.waitForNavigation()
  };

  await login();
};

