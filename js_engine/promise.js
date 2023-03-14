/* 
1. 비동기는 동시의 문제가 아니고 순서의 문제다
2. 한 번 비동기는 영원한 비동기
3. 콜백이라고 무조건 비동기가 아니다.
4. Promise - 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체(실행은 되었지만, 결괏값을 나중에 원할 때 쓸 수 있는 것)
5. await 이 then 역할..
*/

let a = 2;
// 함수 먼저 실행되고 p에 대입된 다음 내려감

const p = new Promise((resolve, reject) => {
    console.log('제일 먼저. 동기임'); // 1
    setTimeout(() => {
        a = 5;
        console.log(a); // 4
        resolve(a + 1);
    }, 0);
    console.log('여기까지도 동기'); // 2
});

// code ...
console.log('딴짓'); // 3
p.then((result) => {
    console.log(result); // 5
});

function delayP(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

new Promise((resolve, reject) => {
    const p1 = delayP(3000);
    const p2 = delayP(6000);
    return Promise.all([p1, p2]);
})
    .then(() => {
        return delayP(9000);
    })
    .then(() => {});

// promise -> 실행은 바로 -> 결과값이 나올 때는 나중 -> 결괏값을 사용할 때는 더 나중

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000);
});

// 다른 코드...
// 결괏값 꺼낸고 싶을 때. 결과를 나중에 내가 원할 때 쓸수 있다
promise.then(() => {
    console.log('a');
});

// promise -> async/await
// promise.then.catch.finally

const p1 = axios.get('api1'); // then 떼버리고 결과만 가지고 있음
// const p1 = axios.get('api1').then((data) => {}); 바로 사용할 필요 없음
const p2 = axios.get('api2');
const p3 = axios.get('api3');
const p4 = axios.get('api4');
const p5 = axios.get('api5');
const p6 = axios.get('api6');

p1.then((data) => {});
Promise.all([p1, p2, p3, p4, p5, p6]) // all 하나 실패하면 다 catch로 가서 사용X
    .then((result) => {})
    .catch((err) => {}); // 결과 나중에 받기

Promise.allSettled([p1, p2, p3, p4, p5, p6])
    .then((result) => {
        // 실패한 것만 필터링해서 다시 시도할 수 있음
    })
    .catch((err) => {});

const pr = new Promise((resolve, reject) => {
    // resolve 는 성공한 경우, reject 는 실패한 경우 실행되는 함수
    setTimeout(() => {
        resolve('OK');
        // reject(new Error('error..'));
    }, 1000);
});

console.log('START');
pr.then((result) => {
    console.log(result);
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        // 항상
        console.log('END');
    });

const f1 = () => {
    console.log('시작');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료');
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료');
        }, 2000);
    });
};

// 6초
// Promise chaining
console.log('시작');
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .finally(() => {
        console.log('끝');
    });

// 3초
// promise all 하나 실패하면 어떤 데이터도 얻지 못함
console.time('x');
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('x');
});
