/*
1. 함수 선언문 : 어디서든 호출 가능
2. 함수 표현식 : 코드에 도달하면 생성
3. 호이스팅(hoisting) : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미

*/
// 함수
function a() {} // 함수 선언문
// function a() {
//   return undefined; 생략
// }
const b = function () {}; // 함수 표현식
const c = () => {};

console.log(a());

function k(parameter) {
    return parameter;
}

console.log(k('argument'));

// 화살표 함수(arrow function)
const multiply = (x, y, z) => {
    return x * y * z;
};
const f = (x, y, z) => x * y * z;
console.log(multiply(2, 3, 5));
console.log(f(1, 2, 7));

function sayHello(name) {
    let msg = 'Hello';
    if (name) {
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello();
sayHello('Mike');

function sayBye(name) {
    let newName = name || 'friend';
    let msg = `Bye, ${newName}`;
    console.log(msg);
}

// name default 값 설정. default 값은 name 이 없을 때만 할당
function sayMorning(name = 'friend') {
    let msg = `Good morning, ${name}`;
    console.log(msg);
}

sayBye();
sayBye('Jane');
sayMorning();
sayMorning('Mike');

// console.log(add(1, 2)); 선언전에 호출해서 에러
const add = (num1, num2) => num1 + num2;
console.log(add(1, 2));

const sayHello3 = (name = 'Mike') => `Hello, ${name}`;
console.log(sayHello3());
