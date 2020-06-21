import lib1 from './lib1.js';

function test() {
  return 'result test';
}

function run() {
  console.log(lib1.test1());
  console.log(test());
}
run();

export default {
  ...lib1,
  test,
  run,

}