// object 타입에서 전개 연산자를 사용하기

console.log('ES5');
var obj1 = {one : 1, two : 2, other : 0};
var obj2 = {three : 3, four : 4, other : -1};

var combined = {
    one : obj1.one,
    two : obj1.two,
    three : obj2.three,
    four : obj2.four
};

console.log(combined);

// assing() 함수를 이용해서 object 타입의 변수를 하나로 합친다.
// 첫번째 매개변수는 합쳐질 대상, 두번째, 세번째 매개변수를 첫번째 매개변수에 합한다.
// 동일한 키를 사용한 데이터가 있을 경우 뒤쪽에 나오는 키의 값으로 합쳐진다.
var combined = Object.assign({}, obj1, obj2);
console.log(combined);

// 위에 있는 함수와 매개변수의 순서가 다르기 때문에 결과도 달라진다.
var combined = Object.assign({}, obj2, obj1);

var others = Object.assign({}, combined);
console.log(others);

delete others.other;
console.log(others);

console.log('es6');
var combined = {
    ...obj1, ...obj2
};

console.log(combined);

var combined = {...obj2, ...obj1};
console.log(combined);

var {other, ...others} = combined;
console.log(other);
console.log(others);