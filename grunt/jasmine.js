module.exports = function (grunt) {
  return {
    test: {
      src: './htdocs/src/*.js',
      options: {
        specs: './specs/js/*.spec.js',
        keepRunner: false
      }
    }
  };
};
