// 배열
const arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 3]);

// arr = [f, g]; 불가능
arr[5] = 6; // 내부 값은 변환 가능
console.log(arr);

arr[arr.length] = 7;
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.push(8);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(1, 3);
console.log(arr);

arr.splice(2, 0, '바');
console.log(arr);

const result = arr.includes('바');
console.log(result);

const result2 = arr.indexOf('바');
console.log(result2);
console.log(arr.indexOf('가')); // 없으면 -1

const target = ['가', '라', '다', '라', '마', '라'];
while (true) {
    if (target.indexOf('라') === -1) {
        break;
    }
    target.splice(target.indexOf('라'), 1);
}
console.log(target);

let index = target.indexOf('라');
while (index > -1) {
    target.splice(index, 1);
    index = target.indexOf('라');
}

let days = ['월', '화', '수'];
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}

// 객체를 순회하는 for ~ in 과 혼동 X -> 배열 순회는 for ~ of 사용
for (let day of days) {
    console.log(day);
}

/*
1. concat : 합쳐서 새배열 반환
2. forEach(fn) : 함수를 인자로 받아서 배열 반복
3. filter(fn) : 만족하는 모든 요소를 배열로 반환
4. map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
*/

const arr2 = [1, 2];
console.log(arr2.concat([3, 4])); // [1, 2, 3, 4]

const arr3 = ['Mike', 'Tom', 'Jane'];
arr3.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

const arr4 = [1, 2, 3, 4, 5, 6];
const result3 = arr4.filter((item) => {
    return item % 2 == 0;
});
console.log(result3);

const userList = [
    { name: 'Mike', age: 30 },
    { name: 'Jane', age: 27 },
    { name: 'Tom', age: 10 },
];

const newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);
console.log(userList);