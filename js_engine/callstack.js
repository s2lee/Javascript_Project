const x = 'x1';
function c() {
    const y = 'y';
    console.log('c');
    function e() {
        const k = 'k';
        console.log('e');
        c();
    }
}

function a() {
    const x = 'x2';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }
    b();
    console.log(x);
}

function d() {
    console.log('d');
    // e(); error
}
a(); // a, b, c
c(); // c

// 스코프체인 - 함수에서 어떤 값에 접근이 가능한가

// console.log(f());
function f() {
    console.log(temp);
}

const temp = 'Hi there';
f();
