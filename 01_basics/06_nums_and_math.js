let num = new Number(30);
console.log(typeof(num)) // returns object
const otherNum = 230;
console.log(otherNum.toPrecision(2)) // rounds upto 2 significant figures, since here are 3 digits, we get 2.3e+2, which is rounded to 2 significant figures.


/*
Number properties -
num.toString()
num.toFixed(2) - turns the num to precision value of 2 decimal places. 100 --> 100.00
num.toPrecision(3)
num.toLocaleString() - adds commas, 10000 --> 10,
num.MIN_VALUE - min integer vallue
num.MAX_SAFE_VALUE
*/

// **************** MATHS ****************

console.log(Math.abs(-1)) // returns 1

/*
Math.round(4.3) --> returns 4
Math.ceil(4.3)
Math.floor(4.6)
Math.min(arr)
Math.max(arr)
Math.random()
*/
