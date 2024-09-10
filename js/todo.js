const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
// const toDoInput = document.querySelector('#todo-from input'); 과 같음
const toDoList = document.getElementById('todo-list');

/*
toDos 를 로컬스토리지에 저장하기
로컬스토리지에는 배열 저장 못함, 텍스트로만 저장할 수 있음

// JSON.stringify() : 자바스크립트 객체 → JSON 문자열 변환
// JSON.parse() : JSON 문자열 → 자바스크립트 객체 변환
*/

// 저장할 빈 배열 만들기
let toDos = [];

function saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

// ToDo를 지우는 함수
function deleteToDo(event) {
    /*
    // 크롬의 업데이트로 path메서드 사용 불가능
    event.composedPath()
    : 이벤트가 발생되었을때 이벤트가 통과된 경로를 배열로 반환
    (타겟부터 최상위요소-window까지의 경로)  
    
    -> 클릭이벤트가 일어난 타겟을 확인하는 방법
    // shadow DOM 외부의 일반적인 이벤트 타겟을 확인할 때
    event.target
    // shadow DOM 내부의 이벤트 타겟을 확인할 때
    event.composedPath()[0]를 사용함
    [0] : 0번쨰 인덱스 -> 이벤트가 발생한 가장 하위요소
    composedPath는 이벤트의 전파 경로를 배열로 반환하는데
    이벤트가 발생한 가장 하위 요소가 인덱스의 0번째에 위치하기 때문에
    이벤트가 일어난 타켓 그 자체임(이벤트의 실제 타켓)!!!
    */
    const li = event.composedPath()[0].parentElement;
    li.remove();
    // parseInt 문자를 숫자로 변경해줌
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

// newTodo를 표시하는 함수
function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

// todo를 submit할때 실행할 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    // 입력한 값을 먼저 저장하고
    const newTodo = toDoInput.value;
    // 입력칸을 비우기
    // newTodo라는 변수에 인풋값을 복사해서 저장한는것이기 때문에
    // 입력칸을 비워도 값에 변화는 없음 **헷갈리지말것
    toDoInput.value = '';

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    // toDos에 newTodoObject값을 푸시하기
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// submit할시 실행될 이벤트리스너
toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem('toDos');
// console.log(savedToDos); // 걍 문자열이고요
if (savedToDos !== null) {
    const parsedTodos = JSON.parse(savedToDos);
    // console.log(parsedTodos); // 자바스크립트 객체입니당
    toDos = parsedTodos; // 빈 배열이 아니라 저장되어있는 배열을 가져와줌
    parsedTodos.forEach(paintToDo);
    /*
    (item) => console.log('this is the turn off', item)
    =
    function sayHello(item) {console.log('this is the turn off',item)};
    과 같음
    */
}

/*
filter함수
제외하고 새로운 배열을 보여줌 (not삭제 제외한 새로운 배열)
*/
