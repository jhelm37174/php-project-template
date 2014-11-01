module.exports = function (grunt) {
  return {
    unit: {
      dir: 'specs/php'
    },
    options: {
      bin: 'phpunit',
      bootstrap: 'specs/php/bootstrap.php',
      colors: true,
      testdox: true
    }
  };
};
