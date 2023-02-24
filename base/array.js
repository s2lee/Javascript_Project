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
