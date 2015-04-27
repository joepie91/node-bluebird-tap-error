var Promise;

Promise = require("bluebird");

module.exports = function(func) {
  return function(err) {
    return Promise["try"](function() {
      return func(err);
    })["catch"](function() {
      return Promise.resolve();
    }).then(function() {
      return Promise.reject(err);
    });
  };
};
