"use strict";

var gulp = require("gulp"), htmlclean = require('gulp-htmlclean'), uglify = require('gulp-uglify');

var folders = {
  src: 'src/',
  build: 'build/'
};

// This task will remove white spaces from the html files
gulp.task('html', function() {
  var out = folders.build + 'html/'; 
  return gulp.src(folders.src + 'html/**/*')
  .pipe(htmlclean())
  .pipe(gulp.dest(out));
});

// This task will minimise the javascript files
gulp.task('js', function() {
  return gulp.src(folders.src + 'js/**/*')
  .pipe(uglify())
  .pipe(gulp.dest(folders.build + 'js/'));
});

// Default task can be created to run all the mentioned tasks in the project when we issue the command gulp from command prompt.
gulp.task('default', ['js']);