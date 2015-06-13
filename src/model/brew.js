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
 * @method getActivePhase
 * @return {Object} phase
 */
Brew.prototype.getActivePhase = function() {
  return _.find(this.phases, function(phase) {
    return INPROGRESS_STATUSES.indexOf(phase.status) > -1;
  });
};

module.exports = Brew;
