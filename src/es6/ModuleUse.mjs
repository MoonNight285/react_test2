import {name, job, gender, getInfo} from "./MyMod.mjs";
import {num1, num2, sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";

// node.js 가 ES6 버전이 나오기 이전부터 모듈화 시스템을 사용하고 있었음.
// node.js 가 기본적으로 사용하던 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음.
// ES6 가 발표되면서 import/export를 지원하게 됨
// 기본 방식은 CommonJS으로 사용되고 EX6방식을 사용하려면 확장자가 .mjs를 사용하던지, package.json 파일에
// type : module를 추가하여 설정을 해야 함

// html 문서내에서 import를 사용하고자 할 경우 <script type='module'>을 사용하여 해당 파일이 모듈을 사용한다는것을
// 알려줘야함

console.log(name);
console.log(job);
console.log(gender);
console.log(getInfo());

console.log(`첫번째 숫자 : ${num1} + 두번째 숫자 : ${num2}는 의 값 : ${sum}`);
console.log(`sub() 실행 : ${sub()}`);