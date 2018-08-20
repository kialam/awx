module.exports = function (page, scenario) {

  page.evaluate(()=> {
    new Promise(((resolve, reject) => 
    angular.getTestability(document.body)
      .whenStable(() => {
        console.log('>>>>>>>>>>>>>>>>>>>>> ready for testing');
        resolve();
      })  
    ))
  });
}

