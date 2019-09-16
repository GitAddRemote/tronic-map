/**
 * Making an async array map function
 */
module.exports = Array.prototype.maptronic = function(mapFunc) {
    let returnVal = [];
    return new Promise((resolve, reject) => {
      try {
        this.forEach(element => {
          const found = mapFunc(element);
          returnVal.push(found);
        });
        resolve(returnVal);
      } catch (err) {
        reject(err);
      }
    });
  };