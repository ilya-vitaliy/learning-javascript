/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const numberOffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
if (personalMoviesDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMoviesDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}
console.log(personalMoviesDB);

//Задача 4. Потренироваться и переписать цикл еще двумя способами - с помощью while и do...while
// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMoviesDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i--;
//   }
// }

let i = 0;
while (i < 2) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log('done');
    i++;
  } else {
    console.log('error');
  }
}
//--------------------------------------------------------------------------------------------------------------------
// let num = Number(prompt('Введи число'));
// while (num !== 10) {
//   num = Number(prompt('Попробуй еще раз'));
// }

// alert('Готово');

//Пользователь вводит числа через prompt().

//Твоя программа должна:

//Спрашивать число снова и снова
//Если пользователь вводит 0 → остановиться
//В конце вывести сумму всех введённых чисел

// let sum = 0;
// let num = Number(prompt('Введи число'));

// while (num != 0) {
//   sum += num;
//   num = Number(prompt('Введи число'));
// }

// alert(`Сумма всех чисел: ${sum}`);
