//Задача
//1) Автоматизировать вопросы пользователю про фильм при помощи цикла.
const numberOffilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
  count: numberOffilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};
for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

  personalMoviesDB.movies[a] = b;
}
console.log(personalMoviesDB);

//2
