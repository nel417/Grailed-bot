const puppeteer = require('puppeteer')

//Brand
const URL = 'https://www.grailed.com/shop/WWLr3K0IrQ'

const self = {
	browser: null,
	pages: null,

	initialize: async () => {
		self.browser = await puppeteer.launch({
			headless: false
		});
		self.page = await self.browser.newPage();

		await self.page.goto(URL, { waitUntil: 'networkidle0' })
		
	},

	getResults: async (numberOfResults) => {
		let elements = await self.page.$$('div[class*="feed"] > div[class*="feed-item"]')
		// let results = []
		for (let el of elements) {
			let title = await el.$eval(('p.listing-title'), node => node.innerText.trim())
			let size = await el.$eval(('p.listing-size'), node => node.innerText.trim())
			let price = await el.$eval(('div.listing-price'), node => node.innerText.trim())
			let time = await el.$eval(('span.date-ago'), node => node.innerText.trim())
			let link = await el.$eval(('a.listing-item-link'), node => node.getAttribute('href'))
			// let img = await el.$eval(('div.lazyload-wrapper > img'), node => node.getAttribute('src'))

			// results.push({
			// 	title,
			// 	size,
			// 	price,
			// 	time,
			// 	link,
			// })

			console.log(
				` Item: ${title}\n Size: ${size}\n Price: ${price}\n Time Posted: ${time}\n View: https://www.grailed.com${link}\n\n`
			);
		}
		// return results;
	}
}

module.exports = self

// document.querySelectorAll('div[class*="feed"] > div[class*="feed-item"]')