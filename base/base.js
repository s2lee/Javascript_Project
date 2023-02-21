const a = 5;
const b = 3;
// const myName = "seungseok";
let = myName = 'seungseok';
let amIFat = true;
let amITall = null;
let something; // undefined

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log('hello' + myName);

myName = 'lee';
console.log('my new name is ' + myName);

console.log(amIFat, something, amITall);

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
console.log(daysOfWeek);
console.log(daysOfWeek[4]);
daysOfWeek.push('SUN');
console.log(daysOfWeek);
console.log(daysOfWeek.length);

// object : property 를 가진 데이터 저장
const player = {
    name: 'seungseok',
    age: 13,
    isFat: true,
    sayGoodbye: function (otherPersonName) {
        console.log('Hello ' + otherPersonName + ' Nice to meet you!');
    },
};

console.log(player.name);
console.log(player['name']);
console.log(player);
player.age = 14;
console.log(player);
player.lastName = 'Lee';
console.log(player);

function sayHello(nameOfPerson, age) {
    console.log('hello my name is ' + nameOfPerson + " and I'm " + age);
}
sayHello('Lee', 13);

player.sayGoodbye('Lynn');

const calculate = {
    add: function (a, b) {
        console.log(a + b);
    },
};

calculate.add(1, 4);

const age = 14;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

console.log(calculateKrAge(age));

const ageOfYou = parseInt(prompt('How old are you?'));
// console.log(typeof ageOfYou, typeof parseInt(ageOfYou));
console.log(isNaN(ageOfYou));
if (isNaN(ageOfYou) || ageOfYou < 0) {
    console.log('Please write a real positive number');
} else if (ageOfYou < 18) {
    console.log('You are too young.');
} else if (ageOfYou >= 18 && ageOfYou <= 50) {
    console.log('You can drink');
} else if (ageOfYou === 100) {
    console.log('You are wiser');
} else if (ageOfYou > 50) {
    console.log('You can do whatever you want');
} else {
    console.log("You can't drink");
}

// const title = document.getElementById("title");
// console.dir(title);
// const hellos = document.getElementsByClassName("hello");
// const helloTag = document.getElementsByTagName("h1")
const title = document.querySelector('.title h1');

// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "red";
//   } else {
//     newColor = "blue";
//   }

//   title.style.color = newColor;
// }
function handleTitleClick2() {
    title.classList.toggle('active');
}

function handleTitleClick() {
    /* raw string 실수 방지 "active" 하나하나 다 안바꾸지 말고 변수 선언하기 */
    const clickedClass = 'active';
    // const currentClassName = title.className;
    // let newClassName;
    if (title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
    // if (currentClassName === clickedClass) {
    //   newClassName = "";
    // } else {
    //   newClassName = clickedClass;
    // }
    // title.className = newClassName;
}
title.addEventListener('click', handleTitleClick2);

function handleMouseEnter() {
    title.innerText = 'mouse is here!!!';
}

function handleMouseLeave() {
    title.innerText = 'mouse is gone!!';
}

title.onclick = handleTitleClick;

title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
title.innerText = 'Got you!';
console.log(title.className);
console.log(hellos);
console.log(helloTag);
const titles = document.querySelectorAll('.title h1');
console.log(title);
console.dir(title);
console.log(titles);
function handleWindowResize() {
    document.body.style.backgroundColor = 'green';
}
window.addEventListener('resize', handleWindowResize);

function handleWindowCopy() {
    alert('Stop Copy!!');
}

function handleWindowOffline() {
    alert('offline');
}

function handleWindowOnline() {
    alert('online');
}

window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
