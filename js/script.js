"use sctrict";

/*
let number = 5;
const persone = 'Alex';
const bool = true;

const obj = {
    name: "Jone",
    age: 25,
    isMarried: false
}

console.log(obj.age);
console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 6, {}, []];

console.log(arr[3]);


//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", "18");
//console.log(answer + 10);

const answers = [];

answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Как ваа фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(answers);


const category = 'toys';
console.log(`https://someurl.com/${category}/5`);//используем бектики ``

const user = 'Ruslan';
alert(`Привет, ${user}`);


const user = [];

user[0] = prompt('Ваше имя?', '');
user[1] = prompt('Ваша фамилия?', '');
user[2] = prompt('Ваш возраст?', '');

alert(`Привет, ${user[0]}`);
alert(`Вам точно, ${user[2]} лет?`);


console.log('arr' + ' - objekt');
console.log(4 + '5');


let incr = 10,
    decr = 10;


//incr++;
//decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 === 8);

const isChecked = true,
      isClose = false;


console.log(!isChecked || isClose);

//9 GIT

*/
//Задания

let vopros = prompt('сколько фильмов вы уже посмотрели?', ''),
    numberOfFilms = vopros;
    

alert('Вы посмотрели ' + numberOfFilms + ' фильма?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', '');
//personalMovieDB.movies = film1;

const otsenka = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film1] = otsenka;

const film2 = prompt('Один из последних просмотренных фильмов?', '');
//personalMovieDB.movies = film1;

const otsenka2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[film2] = otsenka2;

console.log(personalMovieDB);
