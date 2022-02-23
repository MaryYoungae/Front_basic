// Indexing, Spliting, Manipulating String

// string 생성하는 법
const stringPrimitive ='A new string';
const stringObject = new String('A new string');

console.log(`${typeof stringPrimitive}, ${typeof stringObject}`); // string, object

const aString = 'How are you?';
console.log(aString);
console.log('01234567891011');

// 지정 인덱스에 해당하는 요소 조회
console.log(aString[4]); // a
console.log(aString.charAt(5)); // r

console.log(aString.indexOf('o')); // 1
console.log(aString.lastIndexOf('o')); // 9

console.log(aString.slice(8, 11)); // you
console.log(aString.length); // 12 (accessor method)

// Spliting strings
const originalString = 'How are you?';
// Split string by whitespace character(공백문자를 기준으로 자르기)
const splitString = originalString.split(" ");
console.log(typeof splitString); // object. 문자열인지 객체인지 구분 어려움
console.log(splitString, Array.isArray(splitString)); // ['How', 'are', 'you?'] true
// instanceof vs isArray
// MDN 문서 확인하기

console.log(splitString[2]); // you?

// Replace the first instance of "How" with "Where"
const newString = originalString.replace('How', 'Where');
console.log(newString); // Where are you?

