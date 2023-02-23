// 객체 리터럴(속성이 필요하다~ // 값만 필요하다 => 배열)
const book = {
    name: 'Made to Stick',
    year: 1993,
    month: 1,
    date: 24,
    color: 'white', // 쉼표  끝에 찍어주
    '2temp': 'hi there',
    log: function (value) {
        // 객체 안에 있는 함수 = 메서드(method)
        return value;
    },
};

console.log(book.name); // <- 이거 사용하기
console.log(book['name']); // <- book[name] 실수
// console.log(book.2temp )
console.log(book['2temp']);
book.point = 4;
console.log(book.point);

console.log(book.log('bye'));
console.log({} === {}); // false

const t = { name: 'hi' };
const array = [1, 2, t];
console.log(t === array[2]);
console.log(array === [1, 2, t]); // false
