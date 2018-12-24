var gulp = require('gulp');
var del = require('del');

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ])
});

gulp.task('default', gulp.series('clean'));
