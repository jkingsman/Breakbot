var gulp = require('gulp'),
  minifyHtml = require('gulp-htmlmin'),
  jade = require('gulp-jade'),
  minifyCss = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  zip = require('gulp-zip');

//clear out the folder
gulp.task('empty', function() {
  del(['./dest/**', './breakbot.zip']);
});

// minify our html
gulp.task('html', function() {
  gulp.src('./src/html/*')
    .pipe(jade())
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist/'));
});

//minify & concat our CSS
gulp.task('main-css', function() {
  gulp.src('./src/css/**/*')
    .pipe(minifyCss())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/'));
});

//minify and concat our js

//popup
gulp.task('js-popup', function() {
  gulp.src(['./src/js/popup/strings.js', './src/js/popup/popup.js'])
    .pipe(uglify({
      ascii_only: true
    }))
    .pipe(concat('popup.js'))
    .pipe(gulp.dest('./dist/'));
});

//move over remaining files
gulp.task('copy', function() {
  return gulp.src(['./src/img/**/*', './src/fonts/**/*', './src/manifest.json'], {
    base: 'src'
  }).pipe(gulp.dest('./dist'));
});

gulp.task('zip', ['default'], function() {
  return gulp.src('dist/**/*')
    .pipe(zip('Breakbot.zip'))
    .pipe(gulp.dest('./'));
});

//tie it all together
gulp.task('js', ['js-popup']);
gulp.task('css', ['main-css']);

//realtime watching
gulp.task('realtime', function() {
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/html/**/*', ['html']);
  gulp.watch('./src/css/**/*', ['css']);
  gulp.watch(['./src/img/**/*', './src/fonts/**/*', './src/manifest.json'], ['copy']);
});

gulp.task('watch', ['realtime', 'html', 'css', 'js', 'copy']);
gulp.task('default', ['html', 'css', 'js', 'copy']);
