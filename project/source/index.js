import lib1 from './lib1.js';

// support
//  const project = require(
export function test() {
  return 'result test';
}
export function run() {
  console.log(lib1.test1());
  console.log(test());
}
run();
export const { test1 } = lib1;

// support
//  const { default: project } = require(
export default {
  ...lib1,
  test,
  run,
}