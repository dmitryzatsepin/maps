module.exports = function() {
	$.gulp.task('watch', () => {
		$.gulp.watch('src/pug/**/*.pug',
		$.gulp.series('pug')),
		$.gulp.watch('src/assets/styles/**/*.sass',
		$.gulp.series('styles:dev')),
		$.gulp.watch('./smartgrid.js',
		$.gulp.series('grid')),
		$.gulp.watch('src/assets/img/**/*.{png,jpg,gif}',
		$.gulp.series('img:dev')),
		$.gulp.watch('src/assets/img/svg/*.svg',
		$.gulp.series('svg')),
		$.gulp.watch('src/assets/js/**/*.js', 
		$.gulp.series('js:dev'))
	});
};