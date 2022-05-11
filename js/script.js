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

console.log(`string text line 1 
    string text line 2`);
    
    
console.log('string text line 1\n' + 'string text line 2');
const a = 5;
const b = 10;
console.log(`fiveteen is ${a+b} and not ${2*a+b}`);

var classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');


 const classes = `header ${ isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
