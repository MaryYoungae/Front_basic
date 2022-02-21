// 기본 반복문 문법(고전적인 방식)
for(let index = 0; index < 5; index++) {
    console.log(`${index}번 반복`); 
}

const rainbow = 'rainbow';
for(let index = 0; index < rainbow.length; index++) {
    console.log(rainbow[index]);
}

const foods = ['apple', 'orange-cookie', 'avocado', 'plum', 'kiwi'];
let favorite = 'My favorite food is ';
const para = document.querySelector('p');
console.dir(para);

const len = foods.length;
for(let index = 0; index < len; index++) {
    if (index === len -1) {
        favorite += 'and ' + foods[index] + '.';
    } else {
        favorite += foods[index] +', ';
    }
}

// console.log(favorite);
para.textContent = favorite;


// 배열타입인지 확인 방법 
// console.log(typeof foods); // object라고만 나옴
console.log(Array.isArray(foods)); // 배열타입이면 true 반환

// Array.prototype.forEach()
// 프로토타입의 정확한 문법(원형)을 보고 싶을때, 배열을 풀어헤침
const fruits = ['apple', 'banana', 'coconut'];
fruits.forEach(fruit => console.log(fruit));

// for in & for of
// 객체 만들기
let cookie = {
    'product_name' : 'HERSHEY',
    'product_vendor' : 'costoco',
    'product_id' : 'c1',
}; // enumerable 구별되는 파트를 가지고 있음. 순서 없음.

// 객체 뽑기
// 객체의 각 key에 대한 임시 변수를 세팅
for(const key in cookie) {
    console.log(key + ":" + cookie[key]);
}

// for (const key of cookie) {
//     console.log(`${key} : ${cookie[key]}`);
// }
//  cookie is not iterable at loops.js:52:19
// for of : iterable(순서), 순서있는것만 가져올수 있음

// 배열 (순서가 있는, iterable)
const scores = [33, 52, 21, 15, 28];
for(const index of scores) {
    console.log(index);
}

// 모든 iterable은 enumerable이지만 모든 enumerable은 iterable이 아님
console.log('iterable on for in / of');
for(const item in scores) {
    console.log(`${item} : ${scores[item]}`);
}

for(const item of scores) {
    console.log(item);
}