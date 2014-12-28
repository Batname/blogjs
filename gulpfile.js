var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');


var paths = {
    scripts: ['app/js/**/*.js'],
    styles: ['app/css/style.less'],
    jade: ['scr/jade/**/*.jade'],
    coffee: ['scr/coffee/**/*.coffee'],
    sass: ['scr/scss/**/*.scss']
};

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee())
        .pipe(concat('blog1.js'))
        .pipe(gulp.dest('app/dist/js'))
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('app/dist/css'));
});


gulp.task('templates', function() {
    gulp.src(paths.jade)
        .pipe(jade())
        .pipe(gulp.dest('app'))
});

gulp.task('scripts', function() {
    // concat and copy all JavaScript
    return gulp.src(paths.scripts)
        .pipe(concat('blog.js'))
        .pipe(gulp.dest('app/dist/js'));
});

gulp.task('styles', function() {
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(gulp.dest('app/dist/css'));
});

gulp.task('html', function() {
  gulp.src('app/*.html')
});


gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('scr/jade/**/*.jade', ['templates']);
  gulp.watch('scr/coffee/**/*.coffee', ['coffee']);
  gulp.watch('scr/scss/**/*.scss', ['sass']);
  gulp.watch('app/css/style.less', ['styles']);
  gulp.watch(['app/*.html', 'app/partials/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles', 'html', 'templates', 'coffee','sass','webserver', 'watch']);

