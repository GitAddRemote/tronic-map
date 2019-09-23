/**
 * Making an async array map function
 */
module.exports = Object.defineProperty(Array.prototype, "maptronic", {
  enumerable: false,
  configurable: false,
  value: function(mapFunc) {
    let returnVal = [];
    return new Promise((resolve, reject) => {
      try {
        this.forEach((element, index, currentArray) => {
          const found = mapFunc(element, index, currentArray);
          returnVal.push(found);
        });
        resolve(returnVal);
      } catch (err) {
        reject(err);
      }
    });
  }
});