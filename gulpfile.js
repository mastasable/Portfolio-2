'use strict';


var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var reload  = browserSync.reload;

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./app"
        }
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({stream:true}));
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('./app/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function(){
  gulp.src('./app/*.html')
    .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch('./app/*.html', ['html']);
    gulp.watch("js/*.js", ['js', browserSync.reload]);
});
