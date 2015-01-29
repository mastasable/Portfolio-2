'use strict';


var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
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
    return gulp.src('./app/styles/scss/*.scss')
        .pipe($.sass())
        .pipe(gulp.dest('./app/styles'))
        .pipe(reload({stream:true}));
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('./app/scripts/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('concatCss', function  () {
    gulp.src('./app/styles/*.css')
        .pipe($.concatCss('styles.css'))
        .pipe(gulp.dest('./app/styles'));
})
gulp.task('minify-css', function() {
  gulp.src('./app/styles/styles.css')
    .pipe($.minifyCss())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('images', function(){
    gulp.src('./app/images')
        .pipe($.imagemin())
        .pipe(gulp.dest('./dist/images'))
})

gulp.task('html', function(){
  gulp.src('./app/*.html')
    .pipe(reload({stream:true}));
});

gulp.task('serve', ['sass', 'browser-sync'], function () {
    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch('./app/*.html', ['html']);
    gulp.watch("js/*.js", ['js', browserSync.reload]);
});

gulp.task('default', ['js', 'sass', 'concatCss', 'minify-css']);