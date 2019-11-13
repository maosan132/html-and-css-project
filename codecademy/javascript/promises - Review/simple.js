let link = state => {
    return new Promise(function(resolve, reject) {
      if (state) { 
        resolve('success'); 
      } else { 
        reject('error');
      }
    });
  }
  
  let promiseChain = link(true);
  
  promiseChain
  .then( data => {  
     console.log(data + " 1");
     return link(true);
  })
  .then( data => {
     console.log(data+ " 2");
     return link(false);
  })
  .catch(data => {
    console.log(data+ " 2");
  });
  
