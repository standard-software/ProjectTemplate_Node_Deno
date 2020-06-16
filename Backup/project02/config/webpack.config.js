module.exports = {
  mode: 'none',
  entry: ['./build/1_babel/index.js'],
  output: {
    filename: 'project.js',
    path: __dirname + '/../build/2_webpack',
    library: 'project',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
