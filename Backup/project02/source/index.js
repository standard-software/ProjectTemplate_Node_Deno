import lib1 from './lib1.js';
import lib2 from './lib2.js';

function test() {
  return 'result test';
}

function run() {
  console.log(lib1.test1());
  console.log(lib2.test2());
  console.log(test());
}
run();

export default {
  ...lib1,
  ...lib2,
  test,
  run,

}