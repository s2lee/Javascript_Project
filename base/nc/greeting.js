const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
/*
1. 일반적으로 sting만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용함
2. greeting.innerText = "Hello " + usename; 이거 보다 밑에꺼 사용
3. 똑같은 string 두개 이상 나오면 무조건 변수 지정해라
4. 변수만 다르고 똑같은 로직 두개 있으면 도우미 함수 만들어라.
*/
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onClickLoginBtn);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}
