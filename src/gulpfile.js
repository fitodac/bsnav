var gulp 				= require('gulp'),
		pug 				= require('gulp-pug'), // npm install gulp-pug		
		concat 			= require('gulp-concat'), // npm install gulp-concat
		uglify 			= require('gulp-uglify'), // npm install gulp-uglify
		rename 			= require('gulp-rename'), // npm install gulp-rename
		sass 				= require('gulp-sass'), // npm install node-sass
		cssmin 			= require('gulp-cssmin'), // npm install gulp-cssmin
		sourcemaps 	= require('gulp-sourcemaps'), // npm install gulp-sourcemaps
		notify 			= require("gulp-notify"); // npm install --save-dev gulp-notify




// To compile js, just run 'gulp scripts' on console and be sure to have the right paths.
gulp.task('scripts', function(){  
	gulp.src('js/*.js')
		// Compile
		.pipe(concat('bsnav.js'))
		// .pipe(gulp.dest('../dist'))
		
		// Minify
		.pipe(rename('bsnav.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../dist'))

		.pipe(notify({ message: 'Scripts are compiled!', onLast: true }));
});







// COMPILE SASS
gulp.task('sass', function(cb){

	// Compile NITRO.css and sourcemaps
	gulp.src('scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('../dist'))

		.pipe(notify({ message: 'SASS compiled!', onLast: true }));

		return cb();
});



// COMPILE SASS
gulp.task('sass-example', function(cb){

	// Compile NITRO.css and sourcemaps
	gulp.src('scss-example/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('../docs/'))

		.pipe(notify({ message: 'SASS compiled!', onLast: true }));

		return cb();
});




// COMPILE PUG
gulp.task('pug', function buildHTML() {
  return gulp.src('views/*.pug')
	.pipe(pug({ pretty: true }))
	.pipe(gulp.dest('../docs/'))
	.pipe(notify({ message: 'Pug compiled!', onLast: true }));
});





// WATCH
gulp.task('watch', function(cb){
	gulp.watch('views/*.pug', ['pug']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('scss-example/**/*.scss', ['sass-example']);
	return cb();
});