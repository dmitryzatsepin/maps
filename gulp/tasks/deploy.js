module.exports = function() {
	$.gulp.task('deploy', () => {
		return $.gulp.src('html/**')
		.pipe(rsync({
			root: 'html/',
			hostname: 'deager@s52.webhost1.ru',
			// destination: 'surfing.webber-studio.ru/html/',
			// include: ['*.htaccess'], // Includes files to deploy
			exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
			recursive: true,
			archive: true,
			silent: false,
			compress: true
		}));
	});
};