/*
1. this 는 함수 호출 때 결정
2. this 는 기본적으로 window
3. 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
4. 화살표 함수는 부모의 this를 그대로 가져옴
5. 객체의 메서드를 작성할 때는 화살표 함수로 작성하지 않는게 좋다
6. this 를 사용해 객체에 접글한다면 화살표 함수 사용 X

*/

const obj = {
    name: 'seungseok',
    sayName() {
        console.log(this.name);
    },
    // sayName: function () {
    //     console.log(this.name);
    // },
    sayName2: () => {
        console.log(this.name);
    },
    sayName3() {
        // inner -> sayName3 -> anonymous
        console.log(this.name); // seungseok
        function inner() {
            console.log(this.name); // window.name
        }
        const inner2 = () => {
            // 화살표 함수는 부모의 this를 그대로 가져옴 -> obj.sayName3()로 호출함
            console.log(this.name); // seungseok
        };
        inner();
        inner2();
    },
};

// this 를 직접 바꾸는 경우
obj.sayName(); // seungseok

function Human(name) {
    this.name = name;
}

const h = new Human('seungseok');
console.log(h);

function sayName() {
    console.log(this.name);
}

sayName.bind({ name: 'seungseok' })(); // seungseok
sayName.apply({ name: 'seungseok' });
sayName.call({ name: 'seungseok' });

// ~

sayName(); // window.name undefined

const sayN = obj.sayName;
sayN(); // window.name undefined

obj.sayName2(); // window.name undefined

obj.sayName3();

const header = document.querySelector('.class');
header.addEventListener('click', function () {
    console.log(this); // this == header
});

let boy = {
    name: 'Mike',
    sayHello: () => {
        console.log(this); // 전역객체 - 브라우저 환경: window, Node js : global
    },
};

boy.sayHello();

let girl = {
    name: 'Jane',
    showName: function () {
        // console.log(girl.name); // 메서드에서는 객체명을 직접 써주기 보다는 this 사용하기
        console.log(this.name);
    },
    sayBye() {
        console.log(`Good bye ${this.name}`);
    },
};
let woman = girl;
woman.showName();
girl = null;
// woman.showName(); 에러
woman.sayBye();
