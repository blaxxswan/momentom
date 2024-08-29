let a = 5;
let b = 2;
// let은 새로운 변수 선언
let myName = 'swan';

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log('hello ' + myName);

// let을 사용하면 값을 업데이트 할 수 있음
myName = 'blaxxswan';

console.log('your name is ' + myName);

const amIFat = null;
let something;

console.log(something, amIFat);

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

// Get item from Array
console.log(daysOfWeek[4]);

// Add one more day to the Array

daysOfWeek.push('sun');
console.log(daysOfWeek);

const toBuy = ['potato', 'tomato', 'pizza'];
toBuy.push('kimbob');

console.log(toBuy);

/*
const charName = 'swan';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

// player[0] = name
// player[1] = points
const player = ['swan', 121212, false, 'little bit '];
*/

const player = {
    name: 'swan',
    points: 10,
    handsome: false,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);

console.log(player);
player.fat = false;

// 프로퍼티 업데이트
player.lastName = 'potato';
player.points = player.points + 15;
console.log(player);

// function
function sayHello(nameOfPerson, age) {
    console.log('hello my name is ' + nameOfPerson + ' and I am ' + age + '.');
}

sayHello('swan', 10);
sayHello('wonpil', 20);
sayHello('pil', 30);

function plus(c, d) {
    console.log(c + d);
}
function divide(e, f) {
    console.log(e / f);
}

plus(8, 60);
divide(98, 20);

const player1 = {
    name: 'swan',
    sayHi: function (otherPersonName) {
        console.log('hello ' + otherPersonName + ', nice to meet you!');
    },
};

console.log(player1.name);
player1.sayHi('pil');
player1.sayHi('don');

console.log(player1);
player1.name = 'blaxxswan';
console.log(player1);

function minusPotato(potato) {
    console.log(potato - 5);
}
minusPotato(5, 10, 35, 2, 56, 7, 95, 2); // 값은 0
// 인수가 potato하나 뿐이라 여러 인수를 입력해도 값을 받을 수 있는건
// 5뿐임.

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    min: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};
const addResult = calculator.add(2, 3);

// prompt = 사용자가 창을 띄울 수있게 함
// but 자바스크립트를 잠깐 멈추게 함
// 브라우저로 할 수 있는 가장 직관적인 방법(오래된방법)
const age = parseInt(prompt('How old are you?'));

// isNaN : number인지 아닌지를 판단함
// number일 경우 false를 반환, 나머지 값들은 true를 반환
console.log(isNaN(age));

// condition = boolean값이여야함
if (isNaN(age) || age < 0) {
    // condition === true
    console.log('Plase write a real positive number');
} else if (age < 18) {
    // false
    console.log('You are too young.');
} else if (age >= 18 && age <= 50) {
    // true
    console.log('You can drink');
} else if (age > 50 && age <= 80) {
    //false
    console.log('You should exercise.');
} else if (age === 100) {
    console.log('wow you are wise.');
} else if (age > 80) {
    console.log('you can do whatever you want.');
}
