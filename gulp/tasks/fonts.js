module.exports = function () {
	$.gulp.task('fonts', () => {
		return $.gulp.src('./src/assets/fonts/**/*.*')
				.pipe($.gulp.dest('./html/assets/fonts/'));
	});
};