import { readFileSync } from 'node:fs';

const templatePath = './src/index.html';

export const getTemplate = async () => {
	const template = new Promise(function(resolve, reject) {
		let html = readFileSync(templatePath, { encoding: 'utf8' });

		resolve(html);
	});

	let tpl = await template.then(data => data.toString());

	return tpl;
};