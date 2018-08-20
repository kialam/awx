module.exports = async (page, scenario, vp) => {
    await require('./login')(page, scenario)
    await require('./awaitAJAX')(page, scenario)
};
