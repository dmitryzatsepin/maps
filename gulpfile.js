"use strict";

global.$ = {
	path: {
		tasks: require('./gulp/path/tasks.js')
	},
	gulp: require('gulp'),
	del: require('del'),
	fs: require('fs'),
	gp: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create()
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'styles:dev',
		'grid',
		'fonts',
		'js:dev',
		'img:dev',
		'svg'
	)
));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'pug',
		'styles:build',
		'grid',
		'fonts',
		'js:build-min',
		'img:build',
		'svg',
		'robots'
		)
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'server'
	)
));
