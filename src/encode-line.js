const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  return str.replace(/(.)\1*/g, (run, ch) => (run.length > 1 ? run.length : '') + ch);
}

module.exports = {
  encodeLine
};
