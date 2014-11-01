#Overview
===========

** work in progress - not ready for use! **

This space contains a basic setup for PHP projects. The idea is to fork this project and then build your project on top of the fork. 

The main objective of the repo is to provide a structure which already has grunt tasks pre-defined for a variety of tasks including linting and unit testing.

##Installed Grunt Packages
=======

General:
- grunt
- grunt-cli
- load-grunt-config
- time-grunt
- grunt-githooks

Documentation:
- grunt-doxx
- grunt-phpdocumentor

Unit Testing:
- grunt-contrib-jasmine
- grunt-phpunit

linting:
- grunt-contrib-jshint
- grunt-phplint

codestyle checking:
- grunt-jscs
- grunt-phpcs

Image processing:
- grunt-contrib-imagemin

Performance Testing:
- grunt-yslow
- grunt-phantomas
- grunt-autoshot


##Notes:
=========
There is some issue with yslow and time-grunt. If tests do not complete remove time-grunt from gruntfile.js

Some example files are included to show how the unit tests need to be structured for both php and js. These are called example.* and example.spec.*.
