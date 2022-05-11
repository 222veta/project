"use strict";

let num = 50;

while(num<55) {
    console.log(num);
    num++;
} // сначала проверяет условие, если все норм, то выполняет то,что в скобках

let num = 55;

do{
    console.log(num);
    num++;
}
while(num<55);//сначала выполняет то,ччто в скобках, далее проверяет условие, если все норм, то цикл продолжается

let num = 50;
for (let i = 1; i < 9; i++ ) {
    if (i===6) {
        //break; // 1 2 3 4 5 
        continue; // 1 2 3 4 5 7 8 
    }
    console.log(i);
}
\




 
for (let i = 0; i<3;i++){
    console.log(i);
    for (let j = 0; j<3;j++){
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
let length = 7;

for (let i = 1; i<length; i++) {
    for(j=0;j<i;j++) {
        result += "*";
    }


    result+= '\n';
}
console.log(result);

 