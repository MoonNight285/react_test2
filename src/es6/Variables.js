//ES6에서 let, const 키워드가 추가
// var : ES5 버전까지 자바스크립트에서 변수를 선언하는 유일한 방식이였다.
// 변수의 스코프(범위) 함수를 기준으로 하고있음., for 및 if, switch ~ case 내에서 선언한 변수라도 해당 코드블럭을
// 벗어나서 사용이 가능해진다.
// 중복 선언이 가능해진다.

// let : ES6에서 추가된 변수 선언 방식
// 변수의 스코프가 코드 블럭( {} )을 기준으로 함, for 및 if, switch ~ case 의 코드블럭 내에서 선언된
// 변수는 해당 코드블럭을 벗어나면 메모리에서 삭제된다.
// 중복선언이 불가능하다.

// const : ES6에서 추가된 상수 선언 방식
// 변수의 스코프가 코드 블럭을 기준으로 한다. for 및 if, switch ~ case 의 코드블럭 내에서 선언된 변수는
// 해당 코드 블럭을 벗어나면 메모리에서 삭제된다.
// 중복 선언이 불가능해진다.
// 지정된 변수의 데이터 수정이 불가능해진다.
// const로 선언된 변수에 배열, object와 같은 데이터를 저장했을경우 해당 배열 및 object의 요소의
// 데이터를 변경할수 있음

const num = 1;
const str = '문자';
const arr = [];
console.log(arr);
arr[0] = 10;
console.log(arr[0]);
const arr1 = [1, 2, 3];

// object 타입에 데이터 추가시 오류가 발생한다.
const obj = {};
// obj = {name : '이름'};

// object가 가지고 있는 요소의 내용을 수정하는건 문제가없다.
const obj1 = {num: 1, name : '아이유'};
obj1.num = 10;
obj1.name = '유재석';
console.log(obj1);

console.log('\n\n');

// const로 생성한 배열에 내장 함수 사용 시 데이터 추가, 삭제가 가능하다.
// 하지만 무결성 제약조건을 위반하게 되므로 사용하지 않아야한다.
const arr2 = [];
console.log(arr2);
arr2.push(1);
console.log(arr2);
arr2.splice(0,0,0);
console.log(arr2);
arr2.pop();
console.log(arr2);

const obj2 = {};
console.log(obj2);
obj2[`name`] = '아이유';
console.log(obj2);
Object.assign(obj2, {name : '유재석'});
console.log(obj2);
delete obj2.name;
console.log(obj2);

// const 사용시 내용을 수정하고자 하면 새로운 const 변수를 선언하고 데이터를 입력하는 방식으로 사용
const num1 = 1;
const num2 = num1 * 3;

const str1 = '문자';
const str2 = str1 + `추가`;

const arr3 = [];
const arr4 = arr3.concat(1);
console.log(arr3);
console.log(arr4);

const arr5 = [...arr4, 2, 3];
console.log(arr5);

const arr6 = arr5.slice(0, 1);
console.log(arr5);
console.log(arr6);

const [first, ...arr7] = arr5;
console.log(first);
console.log(arr7);

console.log('\n\n');

const obj3 = {name : '아이유', age : 30};
const obj4 = {...obj3, name : '유재석'};
const {name, ...obj5} = obj4;
console.log(obj3);
console.log(obj4);
console.log(name);
console.log(obj5);

