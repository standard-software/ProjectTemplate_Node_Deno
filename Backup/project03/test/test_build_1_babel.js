// const { default: project } = require('../build/1_babel/index.js');  // OK

const project = require('../build/1_babel/index.js'); // OK

console.log(project.test(), project.test1(), project.test2());
