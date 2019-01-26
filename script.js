var a = 'Lorem ipsum dolor sit amet', 
b = 25;
c = false;
d = {name: 'TestObject'};
e = [2, 4, 6, 8, 10];
i = b*2;








console.log(a, b, c, d, e);
console.log(b.toPrecision(4));
console.log(i);
console.log(++i);
console.log(i);
console.log(i++);

console.log(b += 10);
console.log(b -= 10);
console.log(b *= 10);
console.log(b /= 10);
console.log(b %= 10);

console.log('Число ПИ', Math.PI);
console.log('Округление', Math.round(89.279));
console.log('Число от 1 до 10', Math.random()*10);
console.log('2 в степени 5', Math.pow(2,5));

console.log('Длина строки', a.length);
console.log('Ищем символы в строке', a.indexOf('sit'));
console.log('Заменяем символы в строке', a.replace('Lorem', 'Dorem'));
console.log('Меняем верхний и нижний регистры', a.toUpperCase(), a.toLowerCase());




