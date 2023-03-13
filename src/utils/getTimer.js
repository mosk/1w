// https://www.sendtric.com/
// цвет фона для таймера #29BD11
export const getTimer = (lang) => {
	let timerImg = '';

	switch (lang) {
		case `ru`:
			timerImg = `https://gen.sendtric.com/countdown/45ok7wugow`;
			break;

		case `fr`:
			timerImg = `https://gen.sendtric.com/countdown/5g8k57fdz0`;
			break;

		case `pt`:
			timerImg = `https://gen.sendtric.com/countdown/u95o3k5h9v`;
			break;

		case `es`:
			timerImg = `https://gen.sendtric.com/countdown/84lt9io4z7`;
			break;

		case `de`:
			timerImg = `https://gen.sendtric.com/countdown/dej0qy60vo`;
			break;

		case `it`:
			timerImg = `https://gen.sendtric.com/countdown/6ogov069ha`;
			break;

		case `tr`:
			timerImg = `https://gen.sendtric.com/countdown/6qk34pg1m8`;
			break;

		default:
			timerImg = `https://gen.sendtric.com/countdown/2v6e5s2dye`;
			break;
	}

	return timerImg;
};