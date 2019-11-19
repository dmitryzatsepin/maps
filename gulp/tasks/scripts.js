const terser 	= require('gulp-terser'),
	concat 		= require('gulp-concat'),
	sourcemaps 	= require('gulp-sourcemaps'),
	rigger 		= require('gulp-rigger'),
	scriptsPATH = {
		"input": "./src/assets/js/",
		"output": "./html/assets/js/"
	};
		
module.exports = function() {

	$.gulp.task('js:dev', () => {
		return $.gulp.src(scriptsPATH.input + '*.js')
				.pipe(rigger())
				.pipe(concat('main.js'))
				.pipe(sourcemaps.write())
				.pipe($.gulp.dest(scriptsPATH.output))
				.pipe($.browserSync.reload({
						stream: true
				}));
	});

	$.gulp.task('js:build', () => {
		return $.gulp.src(scriptsPATH.input + '*/*.js')
				.pipe(terser())
				.pipe(rigger())
				.pipe(concat('main.js'))
				.pipe($.gulp.dest(scriptsPATH.output))
				.pipe($.browserSync.reload({
						stream: true
				}));
	});

	$.gulp.task('js:build-min', () => {
		return $.gulp.src(scriptsPATH.input + '*/*.js')
				.pipe(rigger())
				.pipe(terser())
				.pipe(concat('main.min.js'))
				.pipe($.gulp.dest(scriptsPATH.output))
				.pipe($.browserSync.reload({
					stream: true
				}));
	});
};