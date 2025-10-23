const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {

  const DECAY = Math.log(2) / HALF_LIFE_PERIOD;

  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const ACTIVITY = parseFloat(sampleActivity);

  if (isNaN(ACTIVITY) || ACTIVITY > MODERN_ACTIVITY || ACTIVITY <= 0) {
    return false;
  }

  const RESULT_AGE = Math.log(MODERN_ACTIVITY / ACTIVITY) / DECAY;

  return Math.ceil(RESULT_AGE);
}

module.exports = {
  dateSample
};
