const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = '';
  let finalResult = '';
  for (const element of members) {
    if (typeof (element) !== 'string') {
      console.log('Not a name');
    } else {
      result += element.trim()[0];
    }
  }
  if (result.length === 0) {
    return false;
  } else {
    finalResult = result.toUpperCase();
    finalResult = finalResult.split('').sort().join('');
    return finalResult;
  }
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  createDreamTeam
};
