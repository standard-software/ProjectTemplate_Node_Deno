const lib1 = require('./lib1.js');

function test() {
  return 'result test';
}

function run() {
  console.log(lib1.test1());
  console.log(test());
}
run();

module.exports = {
  ...lib1,
  test,
  run,
};
