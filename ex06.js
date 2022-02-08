// 데이터 타입

// C나 자바와 달리 모든 수를 실수로 처리, 
// 정수만 표현하기 위한 데이터 타입이 별도로 존재하지 않음


// 6.1 숫자 타입

var integer = 10;       //정수
var double = 10.12;     //실수
var negative = -20;     //음의 정수

// 정수, 실수, 2진수, 8진수, 16진수 리터럴은
// 모두 메모리에 배정밀도 64

var binary = 0b01000001;    //2진수
var octal = 0o0101;         //8진수
var hex = 0x41;             //16진수


console.log(binary);    //65
console.log(octal);     //65
console.log(hex);       //65

console.log(binary == octal);   //true
console.log(octal == hex);      //true

// 정수타입이 따로 없다 -> 정수/정수 해도 실수가 나올 수 있다

console.log(1 == 1.0);      //true
console.log(4 / 2);     //2
console.log(3 / 2);     //1.5

// 숫자타입의 세가지 특별한 값
// 양의 무한대
// 음의 무한대
// 산술 연산 불가 (ex 숫자 * 문자)

console.log(10 / 0);        //Infinity
console.log(-10 / 0);       //-Infinity
console.log(1* 'String');   //NaN

var x = NaN;     //OKAY
//var x = nan;     //error : 대소문자 구분


// 6.2 문자열 타입
// 작은 따옴표(' '), 큰 따옴표(" "), 백틱(` `)
// 보통 작은 따옴표(' ')를 사용한다 

var string;
string = '문자열';
string = "문자열";
string = `문자열`;

string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다";
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다';

console.log(string);

//var string = hello; //따옴표로 감싸지 않은 hello를 식별자로 인식한다.

// 6.3 템플릿 리터럴
// 보통 백틱(` `)을 사용한다
var template = `Template literal`;
console.log(template);

// 6.3.1 멀티라인 문자열
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
// 따라서 이스케이프 시퀀스를 사용해야한다.

var template = '<ul>\n\t<li><a href="#">Home</a><li>\n<ul>';

console.log(template);

// 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도
// 줄바꿈이 허용되며, 모든 공백도 있는 그대로 적용된다.

var template = `<ul>
    <li><a href="#">Home</a><li>
<ul>`;

console.log(template);


// 6.3.2 표현식 삽입

var first = 'Ung-mo';
var last = 'Lee';


console.log('My name is ' + first + ' ' + last + '.');

// ${}으로도 표현식을 삽입 할 수 있다.
// 리터럴(` `)에서만 가능
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);
console.log('1 + 2 = ${1 + 2}');    //(' ')안에서는 그냥 문자열로 취급


// 6.4 불리언 타입

var foo = true;
console.log(foo);

foo = false;
console.log(foo);


// 6.5 undefined 타입
// 변수를 최초 선언했을때 undefined로 초기화됨

var und;
console.log(und);

// 만약 변수에 값이 없다는 것을 명시하고 싶을 때는 null을 할당
var und = null;
console.log(und);


// 6.6 null 타입
// 값에 대한 참조를 명시적으로 제거

var foo = 'Lee';
foo = null;


//HTML에서는 조건에 부합하는 요소를 검색할 수 없는 경우 에러 대신 null을 반환한다.


// 6.7 심벌 타입
// 중복되지않는 유일한 값

var key = Symbol('key');
console.log(typeof key);

var obj = {};

obj[key] = 'value';
console.log(obj[key]);

