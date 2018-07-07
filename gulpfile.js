'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var server = require('browser-sync').create();
var rename = require('gulp-rename');
var del = require('del');
var run = require('run-sequence');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function () {
  return browserify('js/main.js')
      .bundle()
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename(
          {suffix: '.min'}
      ))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest('build/js/'))
      .pipe(server.stream());
});

gulp.task('html', function () {
  return gulp.src('*.html')
      .pipe(gulp.dest('build'))
      .pipe(server.stream());
});

gulp.task('serve', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: false,
    cors: true,
    ui: false
  });

  gulp.watch('js/**/*.js', ['browserify']);
  gulp.watch('*.html', ['html']);
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('build', function (done) {
  run('clean', 'html', 'browserify', done);
});
