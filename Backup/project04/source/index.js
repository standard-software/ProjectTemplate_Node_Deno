import lib1 from './lib1.js';

export function test() {
  return 'result test';
}
export function run() {
  console.log(lib1.test1());
  console.log(test());
}
run();
export const { test1 } = lib1;

export const project = {
  ...lib1,
  test,
  run,
};

export default project;

