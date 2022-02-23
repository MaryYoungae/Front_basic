// 기본적인 함수 정의, 함수 선언문 방식
// 'function'이라는 keyword(예약어) 작성 필요
function add(a, b) { // 함수 선언부
    return a + b;
}

// 함수 호출
console.log(add(10, 15));

/*
    함수 역시 객체타입의 값(일급객체)이기 때문에
    생성한 함수를 변수에 할당 할수 있음.
*/

// 함수 표현식 방식(함수를 하나의 값으로 변수에 할당)
const mtp = function multiply(a, b) {
    return a * b;
}

console.log(mtp); // 결과 : 해당 함수 로직
console.log(mtp(5, 3));

// Function 생성자 함수 방식 (생략. 프로토타입 학습할때 병행)

// ES6 화살표 함수, function 키워드 대신 화살표(arrow)를 사용해서 좀 더 간략하게 표현
// (파라미터) => 함수몸체
const sub = (a , b) => a - b; // return 생략 가능
console.log(sub(10, 15));

// 즉시 실행 함수 - 함수 정의와 동시에 실행되는 함수 한번만 실행되고 다시 호출 불가
let res = (function () {
    const a = 5;
    const b = 10;
    return a * b;
}());

console.log(res);