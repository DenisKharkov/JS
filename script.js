var a = 'Lorem ipsum dolor sit amet', 
b = 25;
c = false;
d = {name: 'TestObject'};
e = [2, 4, 6, 8, 10];
i = b*2;
aEmpty = '';


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


console.log('Второе ДЗ по JavaScript'.toUpperCase());


console.log('Выводим НЕпустую строку - ', a || 'Default string',);
console.log('Выводим ПУСТУЮ строку - ', aEmpty || 'Default string',);

var browser = {
name: 'IE',
version: '9.1',
working: 'no',
deadBrowser: function() {
	return 'Goodbye, world :(';
	}
};

console.log('Выводим данные браузера', browser['name'], browser['version'], browser['working']);
console.log(browser.deadBrowser()); 

for (i = 10; i > 0; i--) {
	if (i % 2 == 0) {
    console.log('Выводим четные значения цикла', i);
	}
}

var browser = 'IE',
aliveStatus;
switch(browser) {
case 'IE': aliveStatus = 'is Dead'; break;
case 'Opera': aliveStatus = 'Survaval'; break;
case 'Mozilla': aliveStatus = 'Big'; break;
default: aliveStatus = 'working somehow...))';
}
console.log(browser + ' ' + aliveStatus);

var x = 11;
var sum = x > 10 ? 'x больше 10' : x < 10 ? 'x меньше 10' : 'x равен 10';
console.log(sum);

var v = 0;
while (v <= 7) {
console.log(v);
v++;
};

function sqr (arg1, arg2, callback) {
	console.log("Число", arg1, "в степени", arg2);
	var arg3 = Math.pow(arg1, arg2);
	callback(console.log('Результат', arg3));
}

console.log(sqr(2, 4));




