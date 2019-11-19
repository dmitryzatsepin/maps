 const plumber 		= require('gulp-plumber'),
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer'),
	csso 			= require('gulp-csso'),
	csscomb 		= require('gulp-csscomb'),
	sourcemaps 		= require('gulp-sourcemaps'),
	rename 			= require('gulp-rename'),
	tildeImporter = require('node-sass-tilde-importer'),
	stylesPATH 		= {
		"input": "./src/assets/styles/",
		"output": "./html/assets/css/"
	};

module.exports = function () {
	$.gulp.task('styles:dev', () => {
		return $.gulp.src(stylesPATH.input + 'main.sass')
				.pipe(plumber())
				.pipe(sourcemaps.init())
				.pipe(sass({importer: tildeImporter}).on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(csscomb())
				.pipe(sourcemaps.write())
				.pipe(rename('style.css'))
				.pipe($.gulp.dest(stylesPATH.output))
				.on('end', $.browserSync.reload);
	});

	$.gulp.task('styles:build', () => {
		return $.gulp.src(stylesPATH.input + 'main.sass')
				.pipe(sass({importer: tildeImporter}).on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(csscomb())
				.pipe(csso())
				.pipe(rename('style.css'))
				.pipe($.gulp.dest(stylesPATH.output))
				.on('end', $.browserSync.reload);
	});

	$.gulp.task('styles:build-min', () => {
		return $.gulp.src(stylesPATH.input + 'main.sass')
				.pipe(sass({importer: tildeImporter}).on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(csscomb())
				.pipe(csso())
				.pipe(rename('style.min.css'))
				.pipe($.gulp.dest(stylesPATH.output))
				.on('end', $.browserSync.reload);
	});
};
