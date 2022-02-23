// String을 사용하는 방식 : '', "", ``(backtick)

// 탬플릿 리터럴 방식(Template literal)
const novel = 'The Little Prince';
const author = 'Saint-Exupery';

console.log(`my favorite novel is ${novel}`);

const address =
    'Homer J.simpson\n' +
    '742 Evergreen Terrace\n' +
    'Springfield';
console.log(address);
// Homer J.simpson
// 742 Evergreen Terrace
// Springfield

const address2 = `Homer J.simpson
742 Evergreen Terrace
Springfield`;
console.log(address2);
// Homer J.simpson
// 742 Evergreen Terrace
// Springfield

// backtick 사용시 \n과 + 없이 개행과 연결 가능
 