// callback 함수 - 기본
function greeting(name) {
    console.log(`Hello ${name}`);
}

// 함수의 선언부에 작성하는 값들 - 인자값
function processUserInput(name, callback) { // 인자값(arguments)
    callback(name); // greeting('Kim'); 가 됨
}

// 함수의 호출부에 작성하는 값들 - 파라미터(parameter)
processUserInput('Kim', greeting); // 동기(Synchronous) 콜백
// processUserInput() -> greeting() -> greeting returned -> porcessUserInput returned
// greeting 이 반환되어야 processUserInput 반환 가능

function waitCoupang(pkg, callback) {
    console.log(`쿠팡에서 ${pkg}가 도착했다!`);
    callback();
}

function bringToNeighbor() {
    console.log('옆집 아주머니에게 전달 완료!');
}

waitCoupang('사과', bringToNeighbor);

const button = document.querySelector('button');
// button.addEventListener('click', function() {
//      console.log('button clicked');
// });

// 한줄일때
button.addEventListener('click', () => console.log('button clicked'));

// 두줄 이상일때 -> {} 로 감싸기
// button.addEventListener('click', () => {
//     console.log('button clicked!');
//     console.log('두줄일때 중괄호');
// })