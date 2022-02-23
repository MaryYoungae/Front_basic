/*
    배열 메서드의 반환 패턴
    1. 원본을 직접적인 수정(mutator method)
    2. 원본은 변경하지 않고, 새로운 값을 생성하여 반환(accessor method)
*/

let fish = ['piranha', 'koi', 'nimo', 'clown-fish'];

// fish 데이터 타입 확인
console.group('object의 실체(?) 확인');
console.log(typeof fish); // object (typeof 연산자 활용)
console.log(Array.isArray(fish)); // true (Array.isArray() 활용)
console.groupEnd();

// mutator methods
// 1. pop(): 원본 배열의 가장 끝 요소 제거, 해당 값 반환, 추가 파라미터는 없음
console.group('pop()');
console.log(`제거된 값: ${fish.pop()}`); // 제거된 값: clown-fish
console.log(fish); // ['piranha', 'koi', 'nimo']
console.groupEnd();

// 2. shift(): 원본 배열의 가장 첫번째(왼쪽 기준, 앞) 요소 제거
console.group('shifh()');
console.log(`제거된 값: ${fish.shift()}`); // array_method_mutator.js:24 제거된 값: piranha
console.log(fish); // ['koi', 'nimo']
console.groupEnd();

// 3. push(): 원본 배열의 가장 끝(오른쪽)에 새로운 요소 추가
console.group('push()');
console.log(`추가된 후 배열의 길이(length): ${fish.push('defense')}`); // 추가된 후 배열의 길이(length): 3
console.log(fish); // ['koi', 'nimo', 'defense']
console.groupEnd();

// 4. unshift(): 원본 배열의 가장 앞에 요소 추가
console.group('unshift()');
console.log(`추가된 후 배열의 길이(length): ${fish.unshift('shark')}`); // 추가된 후 배열의 길이(length): 4
console.log(fish); // ['shark', 'koi', 'nimo', 'defense']
console.groupEnd();

// 5. splice(): 정해진 위치에 요소를 추가하거나 제거, 추가와 제거를 동시에도 가능 
console.group('splice()');
// 5-1. splice()를 활용한 요소 추가
console.log(fish.splice(1, 0, 'whale')); // 두번째 파라미터를 0으로 두면 삭제하지 않고 추가 
console.log(fish); // ['shark', 'whale', 'koi', 'nimo', 'defense']
// 5-2. splice()를 활용한 요소 제거 
console.log(fish.splice(1, 2)); // ['whale', 'koi']
// splice((삭제,추가할)지정인덱스, 지정된 인덱스 위치부터 삭제할 요소수)
// 3번째 파라미터를 입력하지 않으면 제거 가능
console.log(fish); // ['shark', 'nimo', 'defense']
// 5-3. 추가와 제거를 동시에 처리
fish = ['shark', 'whale', 'koi', 'nimo', 'defense'];
console.log(fish.splice(1, 2, 'sakana')); // ['whale', 'koi']
// 1번 인덱스부터 2개의 요소 제거 후 1번 인덱스에 'sakana' 추가
// 제거된 부분만 출력값 반환
console.log(fish); // ['shark', 'sakana', 'nimo', 'defense']
console.groupEnd();
