/// 10장 객체 리터럴

// 10.1 

// 객체는 프로퍼티와 메서드로 구성된다
// 프로퍼티 : 객체의 상태를 나타내는 값
// 매서드 : 프로퍼티를 참조하고 조작할 수 있는 동작

var person = {
    name : 'Lee',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`);
    }
};

console.log(person.name);
console.log(person);
console.log(typeof person);

var empty = {};
console.log(typeof empty);


// 10.3 프로퍼티
// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

var person = {
    // 키는 name, 값은 'Lee'
    name: 'Lee',
    // 키는 age, 값은 20
    age: 20
};

var person = {
    firstName: 'Ung-mo',     //식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lee'      //식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person);



var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';

console.log(obj);

var foo = {
    '':''   // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo);   

var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo);

// 10.4 메서드
// 메서드는 객체에 묶여 있는 함수를 의미한다.

var circle = {
    radius: 5,
    getDiameter: function(){
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

// 10.5 프로퍼티 접근

// 프로퍼티에 접근하는 방법
// 마침표 접근 연산자(.)를 사용하는 마침표 표기법
// 대괄호 프로퍼티 접근 연산자 ([ ... ])를 사용하는 대괄효 표기법


var person = {
    name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name);

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']);

// 없는 프로퍼티를 탐색할 경우
console.log(person.age);    //undefined 반환


// 

//