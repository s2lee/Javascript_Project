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

const multiply = (x, y, z) => {
    return x * y * z;
};
const f = (x, y, z) => x * y * z;
console.log(multiply(2, 3, 5));
console.log(f(1, 2, 7));
