/**
 * @class Brew
 * @constructs
 * @param {Object} options
 */
function BrewPhase(options) {
  options = options || {};

  this.min = options.min;
  this.temp = options.temp;
  this.status = options.status;
}

module.exports = BrewPhase;
