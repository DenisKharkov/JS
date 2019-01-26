var a = 20, b = 20;

text = a > b ? a + ' больше ' + b : a < b ? a + ' меньше ' + b : a + ' равно ' + b;

console.log(text);

function condition (a , b) {
 return a > b ? a + ' больше ' + b : a < b ? a + ' меньше ' + b : a + ' равно ' + b;
}

console.log(condition (10, 20));

console.log(condition (20, 20));

console.log(condition (30, 20));



const condition1 = (a , b) => a > b ? `${a} больше ${b}` : a < b ? `${a} меньше  ${b}` : `${a} равно ${b}`;





console.log(condition1 (10, 20));

console.log(condition1 (20, 20));

console.log(condition1 (30, 20));

