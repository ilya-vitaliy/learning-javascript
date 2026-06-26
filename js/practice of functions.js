/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {}
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberNyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberNyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

// Задание на урок №2

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

//// Задание на урок №3

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // Массив начинается с 0, поэтому используем i - 1 для правильного индекса, так как i начинается с 1, а не с 0
  }
}

writeYourGenres();

//Таким образом наш код работает намного быстрее и не нужно каждый раз обращатся к массиву, а просто к переменной i, которая будет
// увелиичваться на единицу при каждой итерации цикла. И мы будем записывать ответы в массив genres, используя индекс i - 1, что бы правильно сохранять данные в массиве!

//PЗадание на урок №4
//1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в
//  создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
//Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
function calculateVolumeAndArea(сubeEdge) {
  if (!сubeEdge || сubeEdge < 1 || typeof сubeEdge !== 'number' || сubeEdge % 1 !== 0)
    return 'При вычислении произошла ошибка';

  const size = сubeEdge * сubeEdge * сubeEdge;
  const square = сubeEdge * сubeEdge * 6;

  return `Объем куба: ${size}, площадь всей поверхности: ${square}`;
}

//Задача на урок №5
//2) Постепенно переходим к более реалистичным задачам. Вы обнаружите, что там используется все тоже самое. Напишите функцию,
// которая будет определять номер купе по переданному ей номеру места. Наглядно: Функция принимает только целое число от 1 до 36.
//Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
//"Ошибка. Проверьте правильность введенного номера места"
//Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(place) {
  if (typeof place !== 'number' || !Number.isInteger(place) || place < 0) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }

  if (place === 0 || place > 36) {
    return 'Таких мест в вагоне не существует';
  }

  return Math.ceil(place / 4);
}

console.log(getCoupeNumber(8)); // 2
console.log(getCoupeNumber(36)); // 9
console.log(getCoupeNumber(-100)); // Ошибка. Проверьте правильность введенного номера места
console.log(getCoupeNumber(25)); // 7 - Потому что в купе 4 места, и 25 место находится в 7 купе (25 / 4 = 6.25, округляем вверх до 7)

// Задача на урок №6
//1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит
//  не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код
//  (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы
//  можете реализовать и полный скрипт, он тоже должен проходить тесты.

function getTimeFromMinutes(minutesTotal) {
  if (typeof minutesTotal !== 'number' || !Number.isInteger(minutesTotal) || minutesTotal < 0) {
    return 'Ошибка проверьте данные';
  } // Проверяем, что minutesTotal является числом, целым числом и неотрицательным
  const hours = Math.floor(minutesTotal / 60); // Получаем количество часов, округляя вниз
  const minutes = minutesTotal % 60; // Получаем остаток минут после деления на 60

  let hoursStr = '';

  switch (hours) {
    case 0:
      hoursStr = '0 часов';
      break; // break нужен, чтобы выйти из switch после выполнения соответствующего case
    case 1:
      hoursStr = '1 час';
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = 'часа';
      break;
    default:
      hoursStr = 'часов';
  }
  return `Это ${hours} ${hoursStr} и ${minutes} минут`; // Возвращаем строку с количеством часов и минут в нужном формате
}

console.log(getTimeFromMinutes(1200));

// Задача на урок №7

//Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является
//  числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function findMaxNumber(a, b, c, d) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}

console.log(findMaxNumber(1, 5, 76.6, 3));
