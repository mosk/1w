import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { Languages as langs } from './src/languages.js';
import { prefix } from './src/settings/prefix.js';
import { suffix } from './src/settings/suffix.js';
import { eventMainLink, eventFirstLink, eventSecondLink, eventThirdLink, eventFourthLink, eventBigLink, eventBigImageName, luckyJetLink } from './src/settings/links.js';
import { buildEmail } from './src/utils/buildEmail.js';

import { preheader, title, text } from './src/settings/texts.js';

import { getTimer } from './src/utils/getTimer.js';
import { getTemplate } from './src/utils/getTemplate.js';

// если лакиджет вместо баннера с кнопками (обычно, каждую 4-ю рассылку ставим лакджет)
const luckyJet = false;

const email = await getTemplate();
const rl = readline.createInterface({ input, output });
let special = false;

rl.question(`Какая дата? (311299)\n`, date => {
	if (date.toString().length === 6) {
		langs.forEach(lang => buildEmail(date, lang, eval('`' + email + '`')));

		// для Вадима
		let lang = 'ru';
		prefix.ru = `https://1win-mail-16.com/`;

		special = true;

		buildEmail(date, lang, eval('`' + email + '`'), true);
	} else {
		rl.close();
	}

	rl.close();
});