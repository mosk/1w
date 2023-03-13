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
            'de': [],
            'az': [],
            'es': [],
            'en': [],
            'hi': [],
            'fr': [],
            'in': [],
            'it': [],
            'kz': [],
            'ky': [],
            'pt': [],
            'mo': [],
            'pl': [],
            'sw': [],
            'ru': [],
            'tr': [],
            'tg': [],
            'ua': [],
            'uz': []
        };


        let dataArray = data.split(`\n\n\n`);

        dataArray.forEach((item, i) => {
            if (item.includes(langs.de)) {
                result1.de = item.split(langs.de)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.az)) {
                result1.az = item.split(langs.az)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.es)) {
                result1.es = item.split(langs.es)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.en)) {
                result1.en = item.split(langs.en)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.hi)) {
                result1.hi = item.split(langs.hi)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.fr)) {
                result1.fr = item.split(langs.fr)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.in)) {
                result1.in = item.split(langs.in)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.it)) {
                result1.it = item.split(langs.it)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.kz)) {
                result1.kz = item.split(langs.kz)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.ky)) {
                result1.ky = item.split(langs.ky)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.pt)) {
                result1.pt = item.split(langs.pt)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.mo)) {
                result1.mo = item.split(langs.mo)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.pl)) {
                result1.pl = item.split(langs.pl)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.sw)) {
                result1.sw = item.split(langs.sw)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.ru)) {
                result1.ru = item.split(langs.ru)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.tr)) {
                result1.tr = item.split(langs.tr)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.tg)) {
                result1.tg = item.split(langs.tg)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.ua)) {
                result1.ua = item.split(langs.ua)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            } else if (item.includes(langs.uz)) {
                result1.uz = item.split(langs.uz)[1].split(`\n`)[1].split(`Заголовок - `).join(``);
            }
        });

        // 1 строка текста
        dataArray.forEach((item, i) => {
            if (item.includes(langs.de)) {
                result2.de[0] = item.split(langs.de)[1].split(`\n`)[2];
            } else if (item.includes(langs.az)) {
                result2.az[0] = item.split(langs.az)[1].split(`\n`)[2];
            } else if (item.includes(langs.es)) {
                result2.es[0] = item.split(langs.es)[1].split(`\n`)[2];
            } else if (item.includes(langs.en)) {
                result2.en[0] = item.split(langs.en)[1].split(`\n`)[2];
            } else if (item.includes(langs.hi)) {
                result2.hi[0] = item.split(langs.hi)[1].split(`\n`)[2];
            } else if (item.includes(langs.fr)) {
                result2.fr[0] = item.split(langs.fr)[1].split(`\n`)[2];
            } else if (item.includes(langs.in)) {
                result2.in[0] = item.split(langs.in)[1].split(`\n`)[2];
            } else if (item.includes(langs.it)) {
                result2.it[0] = item.split(langs.it)[1].split(`\n`)[2];
            } else if (item.includes(langs.kz)) {
                result2.kz[0] = item.split(langs.kz)[1].split(`\n`)[2];
            } else if (item.includes(langs.ky)) {
                result2.ky[0] = item.split(langs.ky)[1].split(`\n`)[2];
            } else if (item.includes(langs.pt)) {
                result2.pt[0] = item.split(langs.pt)[1].split(`\n`)[2];
            } else if (item.includes(langs.mo)) {
                result2.mo[0] = item.split(langs.mo)[1].split(`\n`)[2];
            } else if (item.includes(langs.pl)) {
                result2.pl[0] = item.split(langs.pl)[1].split(`\n`)[2];
            } else if (item.includes(langs.sw)) {
                result2.sw[0] = item.split(langs.sw)[1].split(`\n`)[2];
            } else if (item.includes(langs.ru)) {
                result2.ru[0] = item.split(langs.ru)[1].split(`\n`)[2];
            } else if (item.includes(langs.tr)) {
                result2.tr[0] = item.split(langs.tr)[1].split(`\n`)[2];
            } else if (item.includes(langs.tg)) {
                result2.tg[0] = item.split(langs.tg)[1].split(`\n`)[2];
            } else if (item.includes(langs.ua)) {
                result2.ua[0] = item.split(langs.ua)[1].split(`\n`)[2];
            } else if (item.includes(langs.uz)) {
                result2.uz[0] = item.split(langs.uz)[1].split(`\n`)[2];
            }
        });

        // 2 строка текста
        dataArray.forEach((item, i) => {
            if (item.includes(langs.de)) {
                result2.de[1] = item.split(langs.de)[1].split(`\n`)[3];
            } else if (item.includes(langs.az)) {
                result2.az[1] = item.split(langs.az)[1].split(`\n`)[3];
            } else if (item.includes(langs.es)) {
                result2.es[1] = item.split(langs.es)[1].split(`\n`)[3];
            } else if (item.includes(langs.en)) {
                result2.en[1] = item.split(langs.en)[1].split(`\n`)[3];
            } else if (item.includes(langs.hi)) {
                result2.hi[1] = item.split(langs.hi)[1].split(`\n`)[3];
            } else if (item.includes(langs.fr)) {
                result2.fr[1] = item.split(langs.fr)[1].split(`\n`)[3];
            } else if (item.includes(langs.in)) {
                result2.in[1] = item.split(langs.in)[1].split(`\n`)[3];
            } else if (item.includes(langs.it)) {
                result2.it[1] = item.split(langs.it)[1].split(`\n`)[3];
            } else if (item.includes(langs.kz)) {
                result2.kz[1] = item.split(langs.kz)[1].split(`\n`)[3];
            } else if (item.includes(langs.ky)) {
                result2.ky[1] = item.split(langs.ky)[1].split(`\n`)[3];
            } else if (item.includes(langs.pt)) {
                result2.pt[1] = item.split(langs.pt)[1].split(`\n`)[3];
            } else if (item.includes(langs.mo)) {
                result2.mo[1] = item.split(langs.mo)[1].split(`\n`)[3];
            } else if (item.includes(langs.pl)) {
                result2.pl[1] = item.split(langs.pl)[1].split(`\n`)[3];
            } else if (item.includes(langs.sw)) {
                result2.sw[1] = item.split(langs.sw)[1].split(`\n`)[3];
            } else if (item.includes(langs.ru)) {
                result2.ru[1] = item.split(langs.ru)[1].split(`\n`)[3];
            } else if (item.includes(langs.tr)) {
                result2.tr[1] = item.split(langs.tr)[1].split(`\n`)[3];
            } else if (item.includes(langs.tg)) {
                result2.tg[1] = item.split(langs.tg)[1].split(`\n`)[3];
            } else if (item.includes(langs.ua)) {
                result2.ua[1] = item.split(langs.ua)[1].split(`\n`)[3];
            } else if (item.includes(langs.uz)) {
                result2.uz[1] = item.split(langs.uz)[1].split(`\n`)[3];
            }
        });

        // // 3 строка текста
        // dataArray.forEach((item, i) => {
        //     if (item.includes(langs.de)) {
        //         result2.de[2] = item.split(langs.de)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.az)) {
        //         result2.az[2] = item.split(langs.az)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.es)) {
        //         result2.es[2] = item.split(langs.es)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.en)) {
        //         result2.en[2] = item.split(langs.en)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.hi)) {
        //         result2.hi[2] = item.split(langs.hi)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.fr)) {
        //         result2.fr[2] = item.split(langs.fr)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.in)) {
        //         result2.in[2] = item.split(langs.in)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.it)) {
        //         result2.it[2] = item.split(langs.it)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.kz)) {
        //         result2.kz[2] = item.split(langs.kz)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.ky)) {
        //         result2.ky[2] = item.split(langs.ky)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.pt)) {
        //         result2.pt[2] = item.split(langs.pt)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.mo)) {
        //         result2.mo[2] = item.split(langs.mo)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.pl)) {
        //         result2.pl[2] = item.split(langs.pl)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.sw)) {
        //         result2.sw[2] = item.split(langs.sw)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.ru)) {
        //         result2.ru[2] = item.split(langs.ru)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.tr)) {
        //         result2.tr[2] = item.split(langs.tr)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.tg)) {
        //         result2.tg[2] = item.split(langs.tg)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.ua)) {
        //         result2.ua[2] = item.split(langs.ua)[1].split(`\n`)[4];
        //     } else if (item.includes(langs.uz)) {
        //         result2.uz[2] = item.split(langs.uz)[1].split(`\n`)[4];
        //     }
        // });

        // // 4 строка текста
        // dataArray.forEach((item, i) => {
        //     if (item.includes(langs.de)) {
        //         result2.de[3]= item.split(langs.de)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.az)) {
        //         result2.az[3]= item.split(langs.az)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.es)) {
        //         result2.es[3]= item.split(langs.es)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.en)) {
        //         result2.en[3]= item.split(langs.en)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.hi)) {
        //         result2.hi[3]= item.split(langs.hi)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.fr)) {
        //         result2.fr[3]= item.split(langs.fr)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.in)) {
        //         result2.in[3]= item.split(langs.in)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.it)) {
        //         result2.it[3]= item.split(langs.it)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.kz)) {
        //         result2.kz[3]= item.split(langs.kz)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.ky)) {
        //         result2.ky[3]= item.split(langs.ky)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.pt)) {
        //         result2.pt[3]= item.split(langs.pt)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.mo)) {
        //         result2.mo[3]= item.split(langs.mo)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.pl)) {
        //         result2.pl[3]= item.split(langs.pl)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.sw)) {
        //         result2.sw[3]= item.split(langs.sw)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.ru)) {
        //         result2.ru[3]= item.split(langs.ru)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.tr)) {
        //         result2.tr[3]= item.split(langs.tr)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.tg)) {
        //         result2.tg[3]= item.split(langs.tg)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.ua)) {
        //         result2.ua[3]= item.split(langs.ua)[1].split(`\n`)[5];
        //     } else if (item.includes(langs.uz)) {
        //         result2.uz[3]= item.split(langs.uz)[1].split(`\n`)[5];
        //     }
        // });

        // // 5 строка текста
        // dataArray.forEach((item, i) => {
        //     if (item.includes(langs.de)) {
        //         result2.de[4] = item.split(langs.de)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.az)) {
        //         result2.az[4] = item.split(langs.az)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.es)) {
        //         result2.es[4] = item.split(langs.es)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.en)) {
        //         result2.en[4] = item.split(langs.en)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.hi)) {
        //         result2.hi[4] = item.split(langs.hi)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.fr)) {
        //         result2.fr[4] = item.split(langs.fr)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.in)) {
        //         result2.in[4] = item.split(langs.in)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.it)) {
        //         result2.it[4] = item.split(langs.it)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.kz)) {
        //         result2.kz[4] = item.split(langs.kz)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.ky)) {
        //         result2.ky[4] = item.split(langs.ky)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.pt)) {
        //         result2.pt[4] = item.split(langs.pt)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.mo)) {
        //         result2.mo[4] = item.split(langs.mo)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.pl)) {
        //         result2.pl[4] = item.split(langs.pl)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.sw)) {
        //         result2.sw[4] = item.split(langs.sw)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.ru)) {
        //         result2.ru[4] = item.split(langs.ru)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.tr)) {
        //         result2.tr[4] = item.split(langs.tr)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.tg)) {
        //         result2.tg[4] = item.split(langs.tg)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.ua)) {
        //         result2.ua[4] = item.split(langs.ua)[1].split(`\n`)[6];
        //     } else if (item.includes(langs.uz)) {
        //         result2.uz[4] = item.split(langs.uz)[1].split(`\n`)[6];
        //     }
        // });

        // // 6 строка текста
        // dataArray.forEach((item, i) => {
        //     if (item.includes(langs.de)) {
        //         result2.de[5]= item.split(langs.de)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.az)) {
        //         result2.az[5]= item.split(langs.az)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.es)) {
        //         result2.es[5]= item.split(langs.es)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.en)) {
        //         result2.en[5]= item.split(langs.en)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.hi)) {
        //         result2.hi[5]= item.split(langs.hi)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.fr)) {
        //         result2.fr[5]= item.split(langs.fr)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.in)) {
        //         result2.in[5]= item.split(langs.in)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.it)) {
        //         result2.it[5]= item.split(langs.it)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.kz)) {
        //         result2.kz[5]= item.split(langs.kz)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.ky)) {
        //         result2.ky[5]= item.split(langs.ky)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.pt)) {
        //         result2.pt[5]= item.split(langs.pt)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.mo)) {
        //         result2.mo[5]= item.split(langs.mo)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.pl)) {
        //         result2.pl[5]= item.split(langs.pl)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.sw)) {
        //         result2.sw[5]= item.split(langs.sw)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.ru)) {
        //         result2.ru[5]= item.split(langs.ru)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.tr)) {
        //         result2.tr[5]= item.split(langs.tr)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.tg)) {
        //         result2.tg[5]= item.split(langs.tg)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.ua)) {
        //         result2.ua[5]= item.split(langs.ua)[1].split(`\n`)[7];
        //     } else if (item.includes(langs.uz)) {
        //         result2.uz[5]= item.split(langs.uz)[1].split(`\n`)[7];
        //     }
        // });

        // // 7 строка текста
        // dataArray.forEach((item, i) => {
        //     if (item.includes(langs.de)) {
        //         result2.de[6]= item.split(langs.de)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.az)) {
        //         result2.az[6]= item.split(langs.az)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.es)) {
        //         result2.es[6]= item.split(langs.es)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.en)) {
        //         result2.en[6]= item.split(langs.en)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.hi)) {
        //         result2.hi[6]= item.split(langs.hi)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.fr)) {
        //         result2.fr[6]= item.split(langs.fr)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.in)) {
        //         result2.in[6]= item.split(langs.in)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.it)) {
        //         result2.it[6]= item.split(langs.it)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.kz)) {
        //         result2.kz[6]= item.split(langs.kz)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.ky)) {
        //         result2.ky[6]= item.split(langs.ky)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.pt)) {
        //         result2.pt[6]= item.split(langs.pt)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.mo)) {
        //         result2.mo[6]= item.split(langs.mo)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.pl)) {
        //         result2.pl[6]= item.split(langs.pl)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.sw)) {
        //         result2.sw[6]= item.split(langs.sw)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.ru)) {
        //         result2.ru[6]= item.split(langs.ru)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.tr)) {
        //         result2.tr[6]= item.split(langs.tr)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.tg)) {
        //         result2.tg[6]= item.split(langs.tg)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.ua)) {
        //         result2.ua[6]= item.split(langs.ua)[1].split(`\n`)[8];
        //     } else if (item.includes(langs.uz)) {
        //         result2.uz[6]= item.split(langs.uz)[1].split(`\n`)[8];
        //     }
        // });


        console.log(result1);
        console.log(result2);

        // let newData = JSON.stringify(result1);

        // fs.writeFile(newName, newData, function (error) {
        //     if (error) throw error;
        // });
    });
};

getText();
