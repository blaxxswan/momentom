// 절대 user를 믿지마라 유효성을 확인하는 습관을 들여랴 ~,~

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const musicBox = document.querySelector('#musicBox');

// string으로만 포함된 변수는 대문자로표기, 변수를 저장하고싶을 때 사용
// 중요한 정보를 담은게 아닐 때 대문자 사용
// 그런데 굳이 변수설정 안해도 될것같긴한데 쌤이 쓰니까 써보겟슴
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// username 정보 localstorage에 저장하기
// localStorage.setItem() key, value값
// 가져오기 getItem() 지우기 removeItem()

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    // 유저가 이름을입력할때 localStorage에 저장
    localStorage.setItem(USERNAME_KEY, username);
    // 저장된값을 가져와서 보여주쟝
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    lyric.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    musicBox.classList.remove(HIDDEN_CLASSNAME);
    musicBox.classList.add('flex');
    weather.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지에 유저네임이 있는지 확인하고 h1을 표시함
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // 로컬스토리지에 유저정보가 없다면 form을 표시하게 함
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // 그 외의 경우 greeting을 보여줌
    // savedUsername이 존재하니까 greeting의 innertext로 넣어줌
    paintGreetings(savedUsername);
}

/*
    onLoginSubmit함수와 if문의 else에 같은 함수가 겹침
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    => 함수로 만들어줌 paintGreetings();
*/
