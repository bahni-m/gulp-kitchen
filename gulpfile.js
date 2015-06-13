var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// BrowserSync Server
gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "*.html", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(['/*.html']);
});

// Concat
gulp.task('concat', function(){
	return gulp.src([
		'pre-js/jquery.min.js',
		'pre-js/bootstrap.min.js',
		'pre-js/main.js',
		'pre-js/jquery.bootstrap-autohidingnavbar.js',
		'pre-js/scrollReveal.min.js'
	])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('js'));
});

// Uglify 
gulp.task('compress', function() {
  return gulp.src('js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});


