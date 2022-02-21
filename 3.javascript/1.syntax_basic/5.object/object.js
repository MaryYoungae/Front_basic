/*
    객체의 일반적인 정의 목적
    여러 변수들을 의미 단위로 하나로 묶어서 사용할수 있는 방식 중하나

    JS에서 원시 값(Primitive value)를 제외한 모든 것은 객체 : array, function ...
    (원시값: number, bigint, boolean, undefiend, symbol, null, string)

    기본적인 차이는 원시값은 하나의 값만을 나타내지만,
    객체는 다양한 타입의 값들을 하나의 단위로 구성한 복합 자료구조

    원시값은 변경 불가능한 값 (immutable value)
    객체는 변경 가능한 값 (mutable value)

    객체는 프로퍼티(porperty, 속성)으로 구성된 집합
    프로퍼티는 키(key)와 값(value)으로 구성됨

    JS에서 사용할 수 있는 모든 값은 프로퍼티 값이 될수 있음
    함수는 일급객체기 때문에 값이 될수 없고, 따라서
    객체의 프로퍼티가 될수 있음(bark property 참조)
    프로퍼티 값이 함수일 경우 함수와 구분하기 위해 메서드라고 부름
*/

// 객체 리터럴 방식을 활용한 객체 생성
let dog = {
    dogName : 'toto',
    fruit : 'kiwi',
    bark : function() {
        console.log(`왈왈! ${this.fruit}가 먹고싶어`);
        // this : 객체 자신을 가리키는 참조변수
    }
};

console.log(dog);
console.table(dog);
dog.bark(); // property가 함수일 경우 호출시 ()까지 작성

console.log(`dog는 ${typeof dog} 타입`);

// 빈객체 생성
const emptyObject = {};
console.log(emptyObject);

// 프로퍼티 조회(접근)
console.log(dog.dogName);
console.log(dog['fruit']);

// 프로퍼티 동작 추가(존재하지 않는 프로퍼티에 값을 할당)
dog.age = 2;
console.table(dog);

// 프로퍼티 삭제 (delete 연산자)
delete dog.age
console.table(dog);