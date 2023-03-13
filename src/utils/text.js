import fs from 'node:fs';

const getText = (fileName = 'text.txt') => {
    fs.readFile(`src/${fileName}`, "utf8", function (err, data) {
        if (err) throw err;

        let newName = fileName.split(`.txt`).join(`--format.js`);

        let langs = {
            'de': `DE`,
            'az': `AZ`,
            'es': `ES`,
            'en': `EN`,
            'hi': `HI`,
            'fr': `FR`,
            'in': `ID`,
            'it': `IT`,
            'kz': `KZ`,
            'ky': `KG`,
            'pt': `PT`,
            'mo': `MD`,
            'pl': `PL`,
            'sw': `ZA`,
            'ru': `RU`,
            'tr': `TR`,
            'tg': `TJ`,
            'ua': `UA`,
            'uz': `UZ`
        };

        let result1 = {
            'de': `DE`,
            'az': `AZ`,
            'es': `ES`,
            'en': `EN`,
            'hi': `IN`,
            'fr': `FR`,
            'in': `ID`,
            'it': `IT`,
            'kz': `KZ`,
            'ky': `KG`,
            'pt': `PT`,
            'mo': `MD`,
            'pl': `PL`,
            'sw': `ZA`,
            'ru': `RU`,
            'tr': `TR`,
            'tg': `TJ`,
            'ua': `UA`,
            'uz': `UZ`
        };

        let result2 = {
            'de': `DE`,
            'az': `AZ`,
            'es': `ES`,
            'en': `EN`,
            'hi': `IN`,
            'fr': `FR`,
            'in': `ID`,
            'it': `IT`,
            'kz': `KZ`,
            'ky': `KG`,
            'pt': `PT`,
            'mo': `MD`,
            'pl': `PL`,
            'sw': `ZA`,
            'ru': `RU`,
            'tr': `TR`,
            'tg': `TJ`,
            'ua': `UA`,
            'uz': `UZ`
        };


        let dataArray = data.split(`\n\n\n`);

        dataArray.forEach((item, i) => {
            if (item.includes(langs.de)) {
                result1.de = item.split(langs.de)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.az)) {
                result1.az = item.split(langs.az)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.es)) {
                result1.es = item.split(langs.es)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.en)) {
                result1.en = item.split(langs.en)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.hi)) {
                result1.hi = item.split(langs.hi)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.fr)) {
                result1.fr = item.split(langs.fr)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.in)) {
                result1.in = item.split(langs.in)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.it)) {
                result1.it = item.split(langs.it)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.kz)) {
                result1.kz = item.split(langs.kz)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ky)) {
                result1.ky = item.split(langs.ky)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.pt)) {
                result1.pt = item.split(langs.pt)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.mo)) {
                result1.mo = item.split(langs.mo)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.pl)) {
                result1.pl = item.split(langs.pl)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.sw)) {
                result1.sw = item.split(langs.sw)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ru)) {
                result1.ru = item.split(langs.ru)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.tr)) {
                result1.tr = item.split(langs.tr)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.tg)) {
                result1.tg = item.split(langs.tg)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ua)) {
                result1.ua = item.split(langs.ua)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            } else if (item.includes(langs.uz)) {
                result1.uz = item.split(langs.uz)[1].split(`\n`)[1].split(`Заголовок - `).join('');
            }
        });

        dataArray.forEach((item, i) => {
            if (item.includes(langs.de)) {
                result2.de = item.split(langs.de)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.az)) {
                result2.az = item.split(langs.az)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.es)) {
                result2.es = item.split(langs.es)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.en)) {
                result2.en = item.split(langs.en)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.hi)) {
                result2.hi = item.split(langs.hi)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.fr)) {
                result2.fr = item.split(langs.fr)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.in)) {
                result2.in = item.split(langs.in)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.it)) {
                result2.it = item.split(langs.it)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.kz)) {
                result2.kz = item.split(langs.kz)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ky)) {
                result2.ky = item.split(langs.ky)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.pt)) {
                result2.pt = item.split(langs.pt)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.mo)) {
                result2.mo = item.split(langs.mo)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.pl)) {
                result2.pl = item.split(langs.pl)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.sw)) {
                result2.sw = item.split(langs.sw)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ru)) {
                result2.ru = item.split(langs.ru)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.tr)) {
                result2.tr = item.split(langs.tr)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.tg)) {
                result2.tg = item.split(langs.tg)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.ua)) {
                result2.ua = item.split(langs.ua)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            } else if (item.includes(langs.uz)) {
                result2.uz = item.split(langs.uz)[1].split(`\n`)[2].split(`Заголовок - `).join('');
            }
        });

        console.log(result1);
        console.log(result2);

        // let newData = JSON.stringify(result1);

        // fs.writeFile(newName, newData, function (error) {
        //     if (error) throw error;
        // });
    });
};

getText();