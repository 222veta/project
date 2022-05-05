const arr = [1, 2, 3];

console.log(arr[1]);


//const obj = {a: 1, b: 2};
const obj = {
    'Anna': 500,
    'Alice': 600
};
console.log(obj.Anna);


const arrObj = { //новое свойство внутри объекта
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{
            as: 'q'
        }, {
            dfd: 'hj'
        }],
        def: {
            d: "hule"

        }
    }
};
const b = 'b';
const d ='fref';
arrObj.b = '1235';
console.log(arrObj[b]);
console.log(arrObj.b);
console.log(arrObj.abc.df[0].as);

console.log(5 % 2); //остаток 1 - деление с остатком
console.log(2 * 5 == 9); //false

const isChecked = false,
    isClose = true;
console.log(isChecked || !isClose);

