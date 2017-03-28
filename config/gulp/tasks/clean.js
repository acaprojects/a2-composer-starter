var gulp = require('gulp');
var config = require('../config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-coverage', 'clean-ngc']);

gulp.task('clean:prod', function() {
    return del([
        'dist',
        '.build'
    ]);
});

/* Clean build folder */
gulp.task('clean:dev', function () {
    return del([
        '.build'
    ]);
});

/* Clean coverage folder */
gulp.task('clean-coverage', function () {
    return del([
        config.coverage
    ]);
});
