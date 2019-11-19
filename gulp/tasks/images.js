const imagemin 		= require('gulp-imagemin'),
	JpegRecompress 	= require('imagemin-jpeg-recompress'),
	pngquant 		= require('imagemin-pngquant'),
	cache 			= require('gulp-cache'),
	imgPATH = {
		"input": ["./src/assets/img/**/*.{png,jpg,gif,svg}",'!./src/assets/img/svg/*'],
		"ouput": "./html/assets/img/"
	};

	module.exports = function () {
		$.gulp.task('img:dev', () => {
			return $.gulp.src(imgPATH.input)
						.pipe($.gulp.dest(imgPATH.ouput));
		});

		$.gulp.task('img:build', () => {
			return $.gulp.src(imgPATH.input)
					.pipe(cache(imagemin([
						imagemin.gifsicle({interlaced: true}),
						imagemin.jpegtran({progressive: true}),
						JpegRecompress({loops: 5, min: 70, max: 75, quality: 'medium'}),
						imagemin.svgo(),
						imagemin.optipng({optimizationLevel: 3}),
						pngquant({quality: [0.65, 0.7], speed: 5})
					],
					{
						verbose: true
					})))
					.pipe($.gulp.dest(imgPATH.ouput));
		});
	};
