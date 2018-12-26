var gulp = require('gulp');
var del = require('del');

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ])
});

gulp.task('copy', (done) => {
  gulp.src(['src/**/*'], { dot: true }).pipe(gulp.dest('dist'));
  done();
});

gulp.task('build', gulp.series('clean', 'copy'));

gulp.task('default', gulp.series('build'));
