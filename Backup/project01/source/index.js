const lib1 = require('./lib1.js');
const lib2 = require('./lib2.js');

function test() {
  return 'result test';
}

function run() {
  console.log(lib1.test1());
  console.log(lib2.test2());
  console.log(test());
}
run();

module.exports = {
  ...lib1,
  ...lib2,
  test,
  run,
};
