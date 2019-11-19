module.exports = function () {
	$.gulp.task('clean', () => {
			return $.del('./html');
	});
};