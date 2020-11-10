# Grailed-bot
Grailed bot to scrape for chrome hearts (or whatever url you use)   

## Installation

Use the package manager [npm](https://npmjs.com) to install all dependencies.

```bash
npm install
```

## Usage
Replace url with the brand you want to preview. The stock URL will display the first page of Chrome Hearts.

```javascript
const URL = 'https://www.grailed.com/shop/WWLr3K0IrQ'
```

The scraper is set to be a quick console app, but if you want to house your data, there's a way to push to an array. Just uncomment.
```javascript
let results = [];
...
results.push({
  title,
  size,
  price,
  time,
  link,
})
...
return results;
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
