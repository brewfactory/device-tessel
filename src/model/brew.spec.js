var Brew = require('./brew');
var BrewPhase = require('./BrewPhase');
var expect = require('chai').expect;

describe('Brew model', function() {
  describe('get actual phase', function() {
    it('should find the phase in progress', function() {
      var actualPhase = new BrewPhase({
        min: 10,
        temp: 50,
        status: 'active'
      });

      var scheduledPhase = new BrewPhase({
        min: 20,
        temp: 70,
        status: 'scheduled'
      });

      var brew = new Brew({
        name: 'Very IPA',
        startDate: new Date(),
        phases: [actualPhase, scheduledPhase]
      });

      var actual = brew.getActualPhase();
      expect(actual).to.be.eql(actualPhase);
    });

    it('should handle when there is no phase in progress', function() {
      var scheduledPhase1 = new BrewPhase({
        min: 10,
        temp: 50,
        status: 'scheduled'
      });

      var scheduledPhase2 = new BrewPhase({
        min: 20,
        temp: 70,
        status: 'scheduled'
      });

      var brew = new Brew({
        name: 'Very IPA',
        startDate: new Date(),
        phases: [scheduledPhase1, scheduledPhase2]
      });

      var actual = brew.getActualPhase();
      expect(actual).to.be.undefined;
    });
  });
});
