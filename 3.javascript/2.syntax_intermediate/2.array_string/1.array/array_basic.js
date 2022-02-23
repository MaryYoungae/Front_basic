const arr = ['orange', 'orange', 'orange-cookie'];
console.log(typeof arr, arr);
console.log(`arr.length: ${arr.length}`);
console.table(arr);

// 요소의 조회(접근)
console.log(`${arr[0]}, ${arr[2]}`);

// 요소의 추가(갱신)
arr[3] = 'new cookie';
arr[2] = 5;
console.log(arr);

// 요소의 삭제
const numArr = ['orange', 'kiwi', 'apple'];
delete numArr[1];
console.log(numArr); // 희소배열 발생 (비추천)
console.log(`length: ${numArr.length}`); // 3

const nutArr = ['walnut', 'almond', 'pinenut'];
nutArr.splice(1, 1); // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수);
console.log(nutArr); // ['walnut', 'pinenut']
console.log(`length: ${nutArr.length}`); // 2