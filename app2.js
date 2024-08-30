const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    const clickedClass = 'active';
    if (h1.className === clickedClass) {
        h1.className = '';
    } else {
        h1.className = clickedClass;
    }
}
h1.addEventListener('click', handleTitleClick);

/*
function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === 'blue') {
        newColor = 'tomato';
        } else {
            newColor = 'blue';
    }
    h1.style.color = newColor;
    }
*/

/*
// property에 on 이 붙어있는 경우, event임
console.dir(h1);

function handleMouseEnter() {
    h1.innerText = 'mouse is here!';
}
*/

/*

function handleMouseLeave() {
    h1.innerText = 'mouse is gone !';
}

h1.onmouseenter = handleMouseEnter;
h1.addEventListener('mouseleave', handleMouseLeave);

// object.addEventListtener('mouseleave', function() {})
와 object.onmouseleave = function () {}

브라우저에서 동일하게 적용되지만 ,addEventListener를 사용하는 것을 더 권장
=> removeEventListener를 통해 이벤트를 지울 수 있음.


function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
    alert('copier!');
}

function handleWindowOffline() {
    alert('SOS no WIFI here!');
}
function handleWindowOnline() {
    alert('ALL GOOD');
}

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
*/
