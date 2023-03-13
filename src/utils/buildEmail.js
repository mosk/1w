import fs from 'node:fs';

export const buildEmail = (date = 'default', lang = 'ru', content = 'default', special = false) => {
	const folderName = `build/${date}`;

	const writeEmail = () => {
		fs.writeFile(`build/${date}/1w--${lang}${special ? '-Vadim' : ''}.html`, "", function (err) {
			if (err) return console.log(err);
		});
	
		fs.appendFile(`build/${date}/1w--${lang}${special ? '-Vadim' : ''}.html`, content, function (err) {
			if (err) return console.log(err);
		});
	};

	try {
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName);
			writeEmail();
		} else {
			writeEmail();
		}
	} catch (err) {
		console.error(err);
	}
};