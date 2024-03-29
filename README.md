# IThub Ekat Website

Made with React and threejs by <br />
TeamLead: Kuznestov Ruslan <br />
FrontEnd: Rubtsova Tatiana, Ezhova Nastya <br />
3D modeling: Korobkov Stepan, Muraviev Bogdan <br />
Project initialization: Dmitriy Vlasenko <br />

# Deploy

### Для обновления билда

1. Сбилдить весь 2д через yarn build (в репозитории ithub)
2. Сбилдить весь 3д через npm run build, если 3д обновилось (в репозитории ithub-3d)
3. Удалить index.html в ithub/build 
4. Скопировать все файлы из ithub-3d/dist и вставить их в ithub/build (если предлагает что-то заменить - меняйте)
5. В ithub/build запустить сервер (например http-server) и проверить работу приложения
6. Закоммитить все изменения в репозиторий, открыть и позже смерджить пулл реквест, чтобы код стал доступен с удаленного репозитория

### 2d

Папка build содержит все файлы, которые будут использоваться в продакшене.
<br>
index.html - главная страница
<br>
about/index.html - страница о колледже
<br>
commission/index.html - страница приемной комиссии

static - папка со статическими файлами, которые использует каждый из html файлов
<br>

build/config.js, public/config.js - файл с константой пути до апи. Его нужно поменять, если изменится путь до апи
### 3d

Папка dist содержит все файлы, которые будут использоваться в продакшене.
<br>
index.html в этой папке - страница 3д навигации
<br>
Папка assets хранит в себе все 3д модели
<br>
Папка draco - драко загрузчик для декомпрессии моделей  
<br>
bundle js - файл со всем javascript приложения

### API

Папка files хранит в себе присланные с фронта файлы и формы 
<br>
OpenDayVisitors - Посетители дня открытых дверей
<br>
Commission - Заявления на поступление в колледж
<br>

bootstrap.js - Начальный файл сервера, именно с него начинается загрузка апи
<br>
Путь к апи на виртуальной машине - home/i21s998/ithub-api/src/

# Инструкция по добавлению нового контента

Здесь описаны способы добавления или изменения контента на сайте

Компоненты - `src/components` <br />
Страницы - `src/pages` <br />
3д - `src/3D`

### Добавление новых картинок, фотографий, документов

Загружать фото и картинки нужно в `src/assets/images`

Импортировать в компонент: `import documentName from '@assets/images/documentName.jpg'`;
Вставить в виде src картинки в компоненте: `<img src={documentName} />`

## Главная страница

### День открытых дверей

В компоненте `OpenDay.js` можно поменять дату следующего дня открытых дверей - изменить текст даты
в теге с классом `open-day-date`

#### День открытых дверей - модальное окно

В модальном окне можно менять доступные для дня открытых дверей даты: <br /> <br />
Компонент `OpenDayModal.js`, массив `availableDates` хранит в себе доступные даты

### Выезд представителей в школы

Для изменения контента слайда нужно импортировать другую картинку и вставить ее <br /> <br />

Для изменения описания и даты нужно изменить текст в теге с классом `event-description`

### Специальности

Чтобы изменить фон каждой и специальностей, нужно изменить ссылку на картинку в соответствующем классе в `Specialties.scss`
<br /> <br />

### Специальности - модальное окно

Контент каждого модального окна хранится в `ModalContent.js`, изменить его можно там же

### Отзывы

Текстовый контент отзывов изменяется в `Reviews.js` в теге с классом `reviews-text`, фото студента можно изменить в `Reviews.scss`

### Документы

Текстовый контент секции документов изменяется в `Documents.js` в теге с классом `text-conditions`, сами документы можно изменить тем же образом, что описан в `Выезд представителей в школы`

## Страница приёмной комиссии

Импорт документов для скачивания - такой же, как и прежде. Чтобы изменить скачиваемый документ, нужно изменить атрибут to в теге `Link` (который находится в теге с классом `commission-links` и `mobile-commission-links`, т.е. изменить нужно в 2ух местах) на имя нового

### Страница приёмной комиссии - форма

При изменении формы нужно: изменить jsx (html, находящийся в return), изменить стейт формы, изменить создание FormData или объекта формы и включить туда внесенные изменения

## Страница о колледже 

components/about

### Страница курсов - фотогалерея

Картинки в слайдерах меняются так же, как и в компонентах `Documents`, `OpenDay`
