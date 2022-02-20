/*
    변수 키워드 종류
    var, let, const
    
    변수와 상수(variables & Constants)
    java와 마찬가지로 변수의 선언(Declaration)과 초기화(initialization) 
    or 정의(Definition) 초기화or할당(Assignment)
*/

// 변수 (Variable : var)
// console.log(tiger); // undefiend, 변수 호이스팅 때문에 최상단에 등록됨
// var tiger;

// let : var의 대체로 사용하는 키워드
// console.log(rabbit); //Cannot access 'rabbit' before initialization
// let rabbit;

// 변수 네이밍 컨벤션(Naming Convention) - camelCase
let userName = 'Kim';
// shortcut : log // 좌측에 네모모양 우측에 Log to the console 적혀있는 log선택
console.log(userName);
// document.write(); 브라우저 화면에 출력 하는 코드
document.write(userName);


// 상수 (Constant : const)
const allUsers = 20;
console.log(allUsers);

allUsers = 5; // 상수 키워드로 쓴 const 변수에는 값 재할당 불가
console.log(allUsers); //Assignment to constant variable. at variables_contants.js:30:10