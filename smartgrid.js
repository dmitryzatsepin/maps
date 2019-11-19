module.exports = {
	outputStyle: 'sass',
	columns: 12,
	offset: '30px',
	mobileFirst: false,
	container: {
		maxWidth: '1150px',
		fields: '30px'
	},
	breakPoints: {
		lg: {
			width: '1150px'
		},
		md: {
			width: '960px'
		},
		sm: {
			width: '780px',
			fields: '15px'
		},
		xs: {
			width: '560px'
		}
	}
};
	/*
	We can create any quantity of break points.

	some_name: {
		width: 'Npx',
		fields: 'N(px|%|rem)',
		offset: 'N(px|%|rem)'
	}
	*/