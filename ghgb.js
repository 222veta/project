if (0) {
    console.log('Ok!');
} else {
    console.log('errror');
} //errror



const num = 50;

if (num < 49) {
    console.log('errror');
} else if (num > 100) {
    console.log(" too much");
} else {
    console.log('ok');
} //ok

(num===50)? console.log('ok') : console.log('errror');//ok

const num = 50;

switch (num) {
    case 49:
        console.log('no');
        break;

    case 100:
        console.log('no');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('jhnhj');
        break;
} //yes

const hanburder = 5;
const fries = null;

if (hanburder&&fries){
    console.log('nice!');
} else{ console.log('no');}
console.log((hanburder&&fries));

const hanburder = 2;
const fries = 6;
if (hanburder === 1 && fries === 6){
    console.log('nice!');
} else{ console.log('no');}
 

console.log( NaN || 2 || undefined );
 
console.log( NaN && 2 && undefined );
 
console.log( 1 && 2 && 3 );
 
console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
 
console.log( NaN || null || !3 || undefined || 5);
 
console.log( NaN || null && !3 && undefined || 5);
 
console.log( 5 === 5 && 3 > 1 || 5);



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else { console.log('fuck you');}


console.log(5256252256252*25252); // huita
console.log(5256252256252n*25252n); // nice
Input   