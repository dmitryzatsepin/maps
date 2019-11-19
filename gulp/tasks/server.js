module.exports = function() {
	$.gulp.task('server', () => {
		$.browserSync.init({
				server: {
					baseDir: "./html"
				}
		});
	});
};