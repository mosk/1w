На выходе версии письма для разных локалей (сейчас их 19). Письма лежат в папке `build/data`, где `data` - дата рассылки в формате `ддммгг`. После запуска в консоли будет шаг с просьбой указать дату.

Для запуска:
```sh
npm run build
```

Переводы нужно закинуть в файл `src/text.txt`, после этого `npm run text` – в консоли переводы в виде объектов (первый тема/заголовок, второй - прехедер/обычный текст). Эти объекты нужно подставить в `src/settings/texts.js`. Важный момент – переводы должны быть отформатированы, то есть никаких лишних символов, отступов, переносов (все тексты отделяются 2-мя переносами по имени локали – часто, переводчики вставляют перенос и пробел – будь внимателен).