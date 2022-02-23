/*
    Arrow function
    2015년 발표된 ECMAScript Spectation(ES6)은 arrow function 추가됨
    익명 함수 표현식을 작성하는 새로운 방법.
    파이썬에서는 lambda function과 비슷
*/

// sum이라는 변수에 덧셈 기능을 제공하는 화살표 함수
const sum = (a, b) => a + b;
console.log(sum(5, 3));
// console.log(typeof sum); // function

// 화살표 함수의 특징
// 1. 암묵적인 return
// 기존의 함수는 { }도 필요하고, return 키워드도 사용했지만 화살표 함수는 둘다 사용 안함
const anotherSum = (a, b) => a + b;

// body(함수의 몸체)부분이 2줄 이상일 경우 { } 및 return을 추가
const sub = (a, b) => {
    console.log('뺄셈입니다.');
    return a - b;
}
console.log(sub(5, 3));

const dog = {
    age: 5,
    name: 'toto',
};
console.log({
    age: 5,
    name: 'toto',
});

/*
    객체를 반환하는 경우 body를 ()로 감싸줘야함
    {}는 객체 리터럴 기호가 아닌 body block으로 인식하기 때문에 ()으로 감싸면 block으로 인식
    {} 대신 () 사용하므로써 {}를 객체 리터럴 기호로 인식하고 객체를 반환
*/

const div = (a, b) => ({result: a / b});
const res = div(5,3); // 내부적으로 div{}의 반환값인 객체 {result: 1.666~7}로 치환후 , 그 객체(값)가 res변수에 할당
console.log(res);

// 파라미터가 1개일 경우 () 생략 가능
// const square = (x) => x * x;
const sqaure = x => x * x;
console.log(sqaure(10));

// 파라미터가 없는 경우() 필수
const greet = () => 'hello';
console.log(greet());