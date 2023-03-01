// this 는 기본적으로 window
// this 는 함수 호출 때 결정

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
