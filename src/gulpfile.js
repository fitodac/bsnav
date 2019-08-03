var gulp 				= require('gulp'),
		pug 				= require('gulp-pug'), // npm install gulp-pug		
		concat 			= require('gulp-concat'), // npm install gulp-concat
		uglify 			= require('gulp-uglify'), // npm install gulp-uglify
		minify 			= require('gulp-minify'), // npm install gulp-minify
		rename 			= require('gulp-rename'), // npm install gulp-rename
		sass 				= require('gulp-sass'), // npm install node-sass
		cssmin 			= require('gulp-cssmin'), // npm install gulp-cssmin
		sourcemaps 	= require('gulp-sourcemaps'), // npm install gulp-sourcemaps
		notify 			= require("gulp-notify"); // npm install --save-dev gulp-notify




gulp.task('js', function(cb){
	gulp.src('js/*.js')
	.pipe(minify({noSource: true}))
	.pipe(rename('bsnav.min.js'))
	.pipe(gulp.dest('../dist/'));

	console.log('Scripts are compiled!');
	cb();
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
		.pipe(gulp.dest('../dist'));

		console.log('SASS compiled!');
		cb();
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
		.pipe(gulp.dest('../docs/'));

		console.log('SASS compiled!')
		cb();
});




// COMPILE PUG
gulp.task('pug', function buildHTML(cb) {
  gulp.src('views/*.pug')
	.pipe(pug({ pretty: true }))
	.pipe(gulp.dest('../docs/'));

	console.log('Pug compiled!');
	cb();
});





// WATCH
gulp.task('watch', function(cb){
	gulp.watch('views/*.pug', ['pug']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('scss-example/**/*.scss', ['sass-example']);
	cb();
});