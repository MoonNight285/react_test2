// ES6 부터 자바스크립트에서도 class 지원함
// constructor(매개변수) : 자바스크립트 클래스의 생성자, 자바스크립트의 생성자는 이름을 지정할수 없다.
// extends : 자스의 클래스도 상속을 지원한다.

class Shape {
    // 정적 맴버, 클래스명.정적맴버명으로 사용
    static create(x, y) {
        return new Shape(x, y);
    }
    
    // 맴버 변수 선언시 var나 let을 사용안한다.
    name = 'Shape';
    
    // 생성자, 이름은 고정
    // 생성자에서 this.변수명을 입력시 맴버변수가 선언이 된다.
    constructor(x, y) {
        this.move(x, y);
    }
    
    // 메서드 선언
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    
    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
s1.area();
s1.move(100, 200);
console.log(s1.name);
console.log(s1.x);
console.log(s1.y);

var s1 = Shape.create(0, 0);
s1.area();
s1.move(10, 20);
console.log(s1.name);
console.log(s1.x);
console.log(s1.y);


class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    
    area() {
        if (this.radius === 0) {
            return super.area();
        }
        
        return this.radius * this.radius;
    }
}

var c = new Circle(0,0,10);
c.area();