const datejs = require('datejs');

function combineUsers(...args) {
    const combinedObject = {
    users: []
  };

  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }
 
 combinedObject.merge_date = Date.today().toString('M/d/yy');

  
  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};