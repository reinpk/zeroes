/**
 * Create a zeroes array with the given `dimensions`.
 *
 * @param {Number|Array} dimensions
 * @param {Number} initialValue
 * @param {Array} indexes  <private>
 * @return {Array}
 * @api public
 */

function zeroes (dimensions, initialValue, indexes) {
  if (dimensions.length === 1) dimensions = dimensions[0];
  if (initialValue === undefined) initialValue = 0;
  if (indexes === undefined) indexes = [];

  // if it's a number, create a flat array of zeroes
  if (typeof dimensions === 'number') {
    return fill(dimensions, initialValue, indexes)
  }
  // else create an array of one-dimension-less arrays full of zeroes
  else {
    var array = new Array(dimensions[0]);
    for (var j = 0; j < dimensions[0]; j += 1) {
      array[j] = zeroes(dimensions.slice(1), initialValue, indexes.concat(j));
    }
    return array;
  }
}

function fill (size, value, indexes) {
  var array = new Array(size);
  for (var i = 0; i < size; i += 1) {
    if (typeof value === 'function') {
      array[i] = value.apply(null, indexes.concat(i));
    } else {
      array[i] = value;
    }
  }
  return array;
}

module.exports = zeroes;
