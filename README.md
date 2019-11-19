# gulp-pug-sass-template 

![GitHub release](https://img.shields.io/github/release/dmitryzatsepin/start.svg)
[![dependencies Status](https://david-dm.org/dmitryzatsepin/start/status.svg)](https://david-dm.org/dmitryzatsepin/start)
[![devDependencies Status](https://david-dm.org/dmitryzatsepin/start/dev-status.svg)](https://david-dm.org/dmitryzatsepin/start?type=dev)
![GitHub stars](https://img.shields.io/github/stars/dmitryzatsepin/start.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/dmitryzatsepin/start.svg?style=social)
<a href="https://qiwi.com/n/DMITRYZATSEPIN">
<img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D0%B8%D0%B2%D0%BE-Qiwi-orange.svg">
</a>
<a href="https://www.paypal.com/paypalme/dimpin/">
<img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D0%B8%D0%B2%D0%BE-PayPal-informational.svg">
</a>
<a href="https://www.tinkoff.ru/sl/7CGdxiCUr2E">
<img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D0%B8%D0%B2%D0%BE-%D0%9D%D0%B0%20%D0%BA%D0%B0%D1%80%D1%82%D1%83%20--%205536%209137%207072%203936-informational.svg">
</a>

## Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используются препроцессоры [Pug](https://pugjs.org/) и [Sass](https://sass-lang.com/)
* используется CSS-сетка [Smart-grid](https://github.com/dmitry-lavrik/smart-grid) на основе Bootstrap для быстрой адаптивной вёрстки
* используется жёсткий кодгайд

## Установка
* установите [NodeJS](https://nodejs.org/en/) (если требуется)
* скачайте сборку в консоли с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/dmitryzatsepin/start.git```
* установите ```gulp``` глобально: ```npm i gulp -g```
* перейдите в скачанную папку со сборкой: ```cd start```
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```gulp``` (режим разработки)
* чтобы собрать проект, введите команду ```gulp build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## Файловая структура

```
start-project
├── html
├── gulp
├── src
│   ├── assets
│   ├── pug
├── tar-stream
├── .gitignore
├── README.md
├── gulpfile.js
├── package.json

```

* Корень папки:
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```gulpfile.js``` — настройки Gulp
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки и компоненты: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * секции (лендинг): ```src/views/sections```
    * страницы (айт): ```src/views/pages```
    * SASS-файлы: ```src/styles```
* Папка ```src``` - папка, из которой запускается локальный сервер для разработки (при запуске ```gulp```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## Команды
* ```gulp``` - запуск сервера для разработки проекта
* ```gulp build``` - собрать проект с оптимизацией без запуска 
