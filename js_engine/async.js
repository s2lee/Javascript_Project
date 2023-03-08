async function a() {
    console.log('2'); // 여기만 동기
    const a = await 1; // await 때문에 그 밑에 다 비동기로
    console.log('4');
    console.log('a', a);
    await null;
    const b = await Promise.resolve(1);
    console.log('b', b);
    return a + b;
}

console.log('1');

a()
    // 비동기
    .then((result) => {
        console.log(result);
    })
    .then((result2) => {
        console.log(result2);
    });

// 동기
console.log('3');

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

async function b() {
    try {
        await delayP(1000);
    } catch (error) {
        console.log(error);
    }
    try {
        await delayP(1000);
        await delayP(1000);
        await delayP(1000);
    } catch (error) {
        console.log(error);
    }
    const c = await 1;
    const d = await Promise.resolve(1); // resolve 된 값
}

async function temp1() {
    const a = await 1; // await -> then
    console.log('a', a);
    console.log('hmm');
    await null;
    const b = await Promise.resolve(1);
    console.log('b', b);
    return b;
}

Promise.resolve(1)
    .then((a) => {
        console.log('a', a);
        console.log('hmm');
        return null;
    })
    .then(() => {
        return Promise.resolve(1);
    })
    .then((b) => {
        console.log('b', b);
        return b;
    });

temp1()
    .then((result) => {
        console.log(result);
    })
    .then((result2) => {
        console.log(result2);
    });

// total 18초
async function k() {
    await delayP(3000); // 3초
    await delayP(6000); // 6초 뒤에 넘어가고
    await delayP(9000); // 9초
}

// total 15초
async function g() {
    const p1 = delayP(3000);
    const p2 = delayP(6000);
    await Promise.allSettled([p1, p2]); // 6초
    await delayP(9000); // 9초;
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

async function createPost() {
    const post = await db.getPost(); // 게시글 조회
    if (post) {
        res.status(403).send('이미 게시글이 존재합니다.');
    } else {
        await db.createPost(); // 게시글 작성
        // 순차적으로 할 필요 없으면. 동시에 진행되어도 되면
        const p1 = db.userIncrementPostCount(); // 사용자에 작성글 카운트 1 올림
        const p2 = db.createNoti(); // 새로운 게시글 알림 등록
        await Promise.allSettled([p1, p2]);
    }
}
