/* 
1. 세미콜론은 한줄이 끝났다는 의미로 써주고 항상 써주는게 좋다.
2. 예약어를 변수명으로 사용할 수 없다. ex) class
3. null 은 존재하지 않는 값
4. undefined 는 값이 할당되지 않았다는 것
5. let 은 선언후 값 변환 가능. 바꿀 때는 let 생략
6. const 절대로 바뀌지 않는 상수. 수정X, 가급적 대문자로 선언하는게 좋음
7. 일단 모든 변수를 const 로 선언하고 변경될 여지가 있는 변수만 let 으로 바꾸기
8. 숫자와 관련된 작업을 할 때 NaN 이 아닌지 염두해야함
9. 자동 형변환 -> 명시적 형변환 으로 바꿀 것
10. false - 숫자 0, 빈 문자열 '', null, undefined, NaN
11. 가급적 동등연산자(==) 보다는 타입까지 비교해주는 일치연산자(===) 사용
12. || 는 첫번째 true 를 발견하는 즉시 평가를 멈춤
13. &&(AND) 는 첫번째 false 를 발견하는 즉시 평가를 멈춤
14. 그래서 실제로 어떤 순서로 평가를 하는지가 중요
15. 간단한 평가로 true false 를 판단할 수 있다면 복잡한 작업전에 해주는게 좋음
16. ex) 운전면허가 있고(80%) 시력이 좋은(60%) 여군(7%) -> 여군인데 시력이 좋고 운전면허가 있는 사람
17. 성능 최적화에 도움을 줌
18. && 가 || 보다 우선순위 높음
19. 명확한 횟수가 정해져 있으면 for 문 그게 아니라면 while 문 사용
20. 함수는 중복을 제거하기 위해 사용
21. 전체 서비스에서 공통으로 바라봐야 하는 변수를 제외하고 지역변수를 사용할 것
22. 전역변수가 많아지면 관리가 힘들어짐
*/
let grade = 'F';
grade = 'D';

let ageOfAnimal;
console.log(ageOfAnimal); // undefined

console.log(typeof null); // object bug

Number('문자'); // NaN
Number(null); // 0
Number(undefined); // NaN

console.log(1 == '1');
console.log(1 === '1');

const age = 19;
if (age > 19) {
    console.log('환영 합니다.');
} else if (age === 19) {
    console.log('수능 잘치세요.');
} else {
    console.log('안녕히 가세요.');
}

const gender = 'F';
const name = 'Jane';
const isAdult = true;

// 남자이고, 이름이 Mike 이거나 성인이면 통과
if (gender === 'M' && (name === 'Mike' || isAdult)) {
    console.log('통과');
} else {
    console.log('돌아가');
}

// 반복문
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// while (true) {
//     let answer = confirm('계속 할까요?'); // 확인 true, 취소 false
//     if (!answer) {
//         break;
//     }
// }

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}
