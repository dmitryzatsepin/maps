const robots = require('gulp-robots');

module.exports = function () {
	$.gulp.task('robots', () => {
		return $.gulp.src('./src/pug/index.pug')
		.pipe(robots({
			useragent: '*',
			allow: [],
			disallow: ['/']
		}))
		.pipe($.gulp.dest('./html/'));
	});
};