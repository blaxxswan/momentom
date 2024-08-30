const loginInput = document.querySelector('#login-form input');
const loginBtn = document.querySelector('#login-form button');

// 절대 user를 믿지마라 유효성을 확인하는 습관을 들여랴 ~,~
function onLoginBtnClick() {
    const username = loginInput.value;

    console.log(username);
}

loginBtn.addEventListener('click', onLoginBtnClick);
