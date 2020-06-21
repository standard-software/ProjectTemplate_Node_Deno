// const { default: project } = require('../build/2_webpack/project.js'); // OK

const project = require('../build/2_webpack/project.js'); // OK

console.log(project.test(), project.test1());
