// 하나의 자바스크립트 파일에서 다른 자스 내용을 사용하기 위한 방식
// 자스는 원래 html을 지원하기 위해서 개발된 언어이였기 때문에 html 문서내에서 <script></script>나 
// <script src = '파일경로'></script> 형태로 다른 자바스크립트의 내용을 사용했음
// 자바 스크립트가 발전하면서 자바스크립트를 단순히 웹에서만 사용하는 것이 아니게되어 외부 자바스크립트
// 내용을 사용하기 위한 방법이 여러가지로 개발되었다.
// ES6 버전부터 export, import를 지원한다.
// 자바스크립트 파일 하나하나는 모듈이라고 부른다.
// 하나의 모듈에는 하나의 export default 가 존재한다.

// export : 변수, 함수, 클래스를 다른 자바스크립트 파일에서 사용할 수 있도록 설정
// 사용법
// export 함수명;
// export {함수명1, 함수명2, ...};
// export default 함수명;

// import : 다른 자바스크립트 파일이 제공하는 변수, 함수, 클래스를 불러와서 사용하도록 설정
// 사용법
// import { 함수명1, 함수명2, ...} from 파일경로; 일반 export로 지정된 것을 불러온다.
// import 함수명 from 파일경로; export default로 지정된것을 불러온다.