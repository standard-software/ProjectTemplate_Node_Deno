import lib1 from './lib1.js';
import lib2 from './lib2.js';

// support
//  const project = require(
export function test() {
  return 'result test';
}
export function run() {
  console.log(lib1.test1());
  console.log(lib2.test2());
  console.log(test());
}
run();
const { test1 } = lib1;
export { test1 };
export const { test2 } = lib2;

// support
//  const { default: project } = require(
export default {
  ...lib1,
  ...lib2,
  test,
  run,
}