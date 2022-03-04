# IThub Ekat Website

Made with React and threejs by <br />
TeamLead: Kuznestov Ruslan <br />
FrontEnd: Rubtsova Tatiana, Ezhova Nastya <br />
3D modeling: Korobkov Stepan, Muraviev Bogdan <br />
Project initialization: Dmitriy Vlasenko <br />

# Navigation

Navigation page is a game, where user can travel around small world to reach destination where he will be redirected to corresponding page or to corresponding part of the main page

# Инструкция по добавлению нового контента

Здесь описаны способы добавления или изменения контента на сайте

Компоненты - `src/components` <br />
Страницы - `src/pages` <br />
3д - `src/3D`

### Добавление новых картинок, фотографий, документов

Загружать фото и картинки нужно в `src/assets/images`

Импортировать в компонент: `import documentName from '@assets/images/documentName.jpg'`;
Вставить в виде src картинки в компоненте: `<img src={documentName} />`

### День открытых дверей

В компоненте `OpenDay.js` можно поменять дату следующего дня открытых дверей - изменить текст даты
на 30 строке компонента в теге с классом `open-day-date`

#### День открытых дверей - модальное окно

В модальном окне можно менять доступные для дня открытых дверей даты: <br /> <br />
Компонент `OpenDayModal.js`, массив `availableDates` на 50 строке хранит в себе доступные даты

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

 
