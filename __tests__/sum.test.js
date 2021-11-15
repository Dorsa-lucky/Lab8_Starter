// sum.test.js
//curly braces around the sum; It basically means "from the object that this require() returns,
// pull out the sum variable and assign it to this sum variable" 
const {sum} = require('../assets/scripts/sum.js');



test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});