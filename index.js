const grailed = require('./grailed')

;
	(async () => {
		await grailed.initialize('node');
		let results = await grailed.getResults(100);
	})();