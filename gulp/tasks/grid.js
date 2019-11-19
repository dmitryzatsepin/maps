const grid = require('smart-grid');

module.exports = function () {
	$.gulp.task('grid', (done) => {
		delete require.cache[require.resolve('../../smartgrid.js')];
		let settings = require('../../smartgrid.js');
		grid('./src/assets/styles/helpers',settings);
		done();
	});

};
