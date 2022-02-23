// window 객체
console.log(window); 
// 최상위 객체
// 개발자도구에서 사용가능한 프로퍼티 확인가능

// window.alert('hello');
// alert('hello'); // window 생략가능

// console.log(innerWidth); // 현재 브라우저화면의 너비값(width), 화면너비 조절후 다시 실행하면 값 변경됨


// BOM 객체
console.log(window.location);
console.log(location); // 객체형태 
console.log(location.href); // 주소만 출력
console.log(location.protocol); // http:
location.href = 'http://www.google.com'; // naver로 이동

// google -> today's weather 검색 -> devTools에서 확인
// 검색한 query가 무엇인지 조회
console.log(location.search); 

