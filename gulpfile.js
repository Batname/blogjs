var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');

var paths = {
    scripts: ['app/js/**/*.js'],
    styles: ['app/css/style.less'] 
};

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
})

gulp.task('html', function() {
  gulp.src('app/*.html')
});


gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/css/style.less', ['styles']);
  gulp.watch(['app/*.html',
    'app/partials/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});


// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles', 'webserver', 'html']); 

