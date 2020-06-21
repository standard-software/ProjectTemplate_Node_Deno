const { default: project } = require('../build/1_babel/index.js');  // OK

// const project = require('../build/1_babel/index.js'); // NG

console.log(project.test(), project.test1());
