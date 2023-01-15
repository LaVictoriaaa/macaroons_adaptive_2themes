const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

exports.default = function () {
    return gulp.src(['css/nesting.less', 'css/styles.less', 'css/adaptive.less', 'css/theme.less'])
        .pipe(less())
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
};

exports.watch = function () {
   gulp.watch('css/*.less', gulp.series('default'));
}

