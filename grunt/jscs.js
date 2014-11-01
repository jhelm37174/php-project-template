module.exports = function (grunt) {
  return {
    options: {
      config: '.jscsrc'
    },
    src: ['grunt/*.js','htdocs/src','specs/js/*.js']
  };
};
