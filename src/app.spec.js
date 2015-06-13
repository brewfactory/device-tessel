var expect = require('chai').expect;
var app = require('./app');
var temperature = require('./module/temperature');

describe('app', function () {
  it('should throw error when tempetature is negative', function () {
    var tempStub = this.sandbox.stub(temperature, 'getActual', function () {
      return -1;
    });

    try {
      app.run();
    } catch (err) {
      expect(tempStub).to.be.called;

      expect(err.message).to.be.equal('Temperature is negative');
      return;
    }

    throw new Error('uncaught exception');
  });
});
