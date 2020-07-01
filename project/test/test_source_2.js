import { test, test1 } from '../source/index.js';
const project = { test, test1 };

console.log(Object.prototype.toString.call(project));

console.log(project.test(), project.test1());
