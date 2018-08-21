module.exports = function (page, scenario) {
  var test = scenario;
  return page.evaluate((test)=> {
    return new Promise(((resolve, reject) => 
    angular.getTestability(document.body)
      .whenStable(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>> ' + test.label + ' ready for testing');
        resolve();
      })  
    ))
  }, test);
}

