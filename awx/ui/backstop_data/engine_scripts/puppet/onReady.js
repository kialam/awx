module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./awaitAJAX')(page, scenario);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
