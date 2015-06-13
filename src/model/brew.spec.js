var Brew = require('./brew');
var expect = require('chai').expect;

describe('Brew model', function() {
  describe('get actual phase', function() {
    it('should find the phase in progress', function() {
      var brew = new Brew({
        name: 'Very IPA',
        startDate: new Date(),
        phases: [{
          min: 10,
          temp: 50,
          status: 'active'
        }, {
          min: 20,
          temp: 70,
          status: 'scheduled'
        }]
      });

      var actual = brew.getActualPhase();
      expect(actual).to.be.eql({
        min: 10,
        temp: 50,
        status: 'active'
      });
    });

    it('should handle when there is no phase in progress', function() {
      var brew = new Brew({
        name: 'Very IPA',
        startDate: new Date(),
        phases: [{
          min: 10,
          temp: 50,
          status: 'scheduled'
        }, {
          min: 20,
          temp: 70,
          status: 'scheduled'
        }]
      });

      var actual = brew.getActualPhase();
      expect(actual).to.be.undefined;
    });
  });
});
