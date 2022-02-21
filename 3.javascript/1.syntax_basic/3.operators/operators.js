// 산술 연산자
console.log(5 + 5);
console.log(5 - 10);
console.log(5 / 2);
console.log(5 * 4);
console.log(10 % 3);
console.log(2 ** 2);

// 증감연산자
// const age = 5; 고정, 재할당 불가, 증감연산자 적용불가
let age = 5;

// 후위연산 : 출력문 실행 종료후 연산 진행
console.log(age++); // 5 // age = age + 1
console.log(age--); // 6
console.log(age); // 5

// 전위연산: 연산을 먼저 진행한 후 출력문 실행
console.log(++age); // 6
console.log(--age); // 5

// 관계연산자(결과값이 true or false가 나오도록하는 문(statement)을 조건식(condition)이라고함)
// if (condition) { }
console.log(age > 4); // true
console.log(age <= 3); // false

// 동등연산자
console.log(1 == '1'); // true, 타입이 서로 다른 경우, 암묵적(implicit)으로 변환하여 비교
console.log(1 === '1'); // false, 엄격한 비교(strict mode)

// 논리연산자
console.log(true && true); // true, and연산(~이고)
console.log(5 > 3 && 2 === 2); //true
// true나 false도 하나의 값(value)
const result = age > 4; 
console.log(result); //true

console.log(5 > 3 || 2 !== 2); //true, or연산(~이거나)

// 삼항연산자
const yourAge = 25;
const beverAge = (yourAge >= 20) ? 'soju' : 'sprite';
console.log(beverAge); // soju

// 할당연산자(우선순위가 거의 낮음) 변수에 값을 할당(assignment) 할때 사용하는 연산자
let myAge = 40;
console.log(myAge);