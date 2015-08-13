'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var stylish = require('jshint-stylish')

gulp.task('default', ['jshint'],function() {});

gulp.task('jshint', function() {
  return gulp.src(['*.js','./backend/**/*.js', './backend/routes/user-functions/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});

gulp.task('test', function() {
  return gulp.src('./backend/tests/test.js')
      .pipe(mocha( { reporter: 'nyan' } ));
});

gulp.task('sass', function () {
  gulp.src('./frontend/app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./frontend/app/scss/**/*.scss', ['sass']);
});

gulp.task('webpackdev', function() {
  return gulp.src('./frontend/app/js/**/*.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('public/'));
});
gulp.task('webpackdev:watch', function () {
  gulp.watch('./frontend/app/**/*.js', ['webpackdev']);
});

gulp.task('copy', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./frontend/app/**/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public/'));
});

gulp.task('copy:watch', function () {
  gulp.watch('./frontend/app/**/*.html', ['copy']);
});

gulp.task('build', ['copy','webpackdev','sass','sass:watch','copy:watch', 'webpackdev:watch']);
gulp.task('default', ['build']);

gulp.task('watch', function() {
  gulp.watch('*.js', ['jshint']);
});
