const gulp = require('gulp');
const jade = require('gulp-jade');
const connect = require('gulp-connect');
const clean = require('gulp-clean');

gulp.task('jade', function() { 
  gulp.src('./lib/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('copy', function() {
  gulp.src([
    './lib/**/!(**.jade)'
  ]).pipe(gulp.dest('./dist/'));

  gulp.src([
    './unify/assets/**'
  ]).pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function() {
  gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});
 
gulp.task('watch', ['jade'], function () {
  gulp.watch(['./lib/**/*.jade'], ['jade']);
  gulp.watch(['./lib/**/!(*.jade)'], ['copy']);
});

gulp.task('build', ['jade', 'copy']);
gulp.task('default', ['build', 'connect', 'watch']);
