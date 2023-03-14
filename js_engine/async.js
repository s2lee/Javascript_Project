/* 
 1. async await -> promise chaning 보다 가독성 좋음 
 2. 함수 앞에 async 키워드를 붙이면 항상 promise 를 반환함
 3. await 키워드 오른쪽에는 프로미스가 오고 프로미스가 처리될 때까지 기다림
 */

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

async function getName(name = 'Kael') {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
    // return 'Mike';
    // return Promise.resolve('Tom')
    // throw new Error('err...')
}
console.log(getName());
getName()
    .then((name) => {
        console.log(name);
    })
    .catch((err) => {
        console.log(err);
    });

async function showName() {
    const result = await getName('Mike');
    console.log(result);
}
console.log('시작');
showName();

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
            // rej(new Error('err..'));
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

console.log('시작');
async function order() {
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
        const result = await Promise.all([f1(), f2(), f3()]);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log('종료');
}

order();
