var expect = require('chai').expect;

describe('app', function () {
  it('should initialize app', function () {
    expect(1).to.be.equal(1);
    expect({
      foo: 'bar'
    }).to.be.eql({
      foo: 'bar'
    });
  });
});
