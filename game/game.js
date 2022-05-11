const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personaleMovieDB = {
    cout: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');
// personaleMovieDB.movies[a] = b;
// personaleMovieDB.movies[c] = d;

// console.log(personaleMovieDB);

// for (let i=0;i<2;i++){
//    const  a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//         personaleMovieDB.movies[a] = b;
//         console.log('done');
//     } else  {
//     console.log('errror');
//     i--;}
// }

// for (let i=0;i<2;i++){
//     const  a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');

//     switch(a,b){
//       case  a != null && b != null && a != '' && b != '' && a.length < 50 : 

//          personaleMovieDB.movies[a] = b;
//          console.log('done');
//       break;
//       default:

//          console.log('errr'), i--;
//       break;

// }
const askAboutMovie = () => [prompt('Один из последних просмотренных фильмов?', ''), prompt('На сколько оцените его?', '')]

let [a, b] = askAboutMovie()
while (a && b && a.length < 50) {
    [a, b] = askAboutMovie()
}





if (numberOfFilms < 10) {
    console.log("so so");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('classic');
} else if (numberOfFilms >= 30) {
    console.log('wooow');
} else {
    console.log('errorororoo');
}


console.log(personaleMovieDB);