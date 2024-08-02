
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (matrix === undefined) { return [] }

  let counter = 1;
  let result = [];

  matrix.map(element => {

    if (counter % 2 !== 0) {
      element.map(e => result.push(e));
    } else {
      element.reverse().map(e => result.push(e));
    }

    counter++;

  })
  return result;
}
