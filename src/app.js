var temperature = require('./module/temperature');

/*
 * @method run
 */
function run () {
  if (temperature.getActual() < 0) {
    throw new Error('Temperature is negative');
  }
}

module.exports.run = run;
