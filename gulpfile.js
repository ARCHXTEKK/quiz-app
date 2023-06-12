const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    watch = require('gulp-watch');

gulp.task('sass-compile', () => {
    return gulp.src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.sass', gulp.parallel('sass-compile'));
})