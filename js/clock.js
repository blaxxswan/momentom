const clock = document.querySelector('#clock');

function getclock() {
    const date = new Date();
    // date.get~() -> 숫자임
    // String()으로 문자로 전환
    // padStart()로 두자리수 문자로 만들기
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// web이 호출될 때 시간을 바로 보여줌
getclock();
// 1초마다 시간을 리로드
setInterval(getclock, 1000);
