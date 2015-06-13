var _ = require('lodash');

var INPROGRESS_STATUSES = ['active', 'heating'];

/**
 * @class Brew
 * @constructs
 * @param {Object} options
 */
function Brew(options) {
  options = options || {};

  this.name = options.name;
  this.startTime = options.startTime;
  this.phases = options.phases;
}

/**
 * @method getActualPhase
 * @return {Object} phase
 */
Brew.prototype.getActualPhase = function() {
  return _.find(this.phases, function(phase) {
    return INPROGRESS_STATUSES.indexOf(phase.status) > -1;
  });
};

module.exports = Brew;
