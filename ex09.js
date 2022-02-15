/// 9장 타입 변환과 단축 평가

var x = 10;


// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str);   //string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);       //number 10


// 암묵적 타입 변환, 강제 변환

var str = x + '';
console.log(typeof str, str);   //string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);       //number 10


// 9.2 암묵적 타입 변환

// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2;   // 102

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10'    // 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0      // true
if(1){

}

// 9.2.1 문자열 타입으로 변환
1 + '2' // "12"

console.log(`1 + 1 = ${1 + 1}`)  // "1 + 1 = 2"


// 심벌 타입은 타입 변환이 불가

// 객체 타입
console.log(({}) + '');
console.log(Math + '');
console.log([] + '');
console.log([10, 20] + '');
console.log(function(){} + '');
console.log(Array + '');

//  9.2.2 숫자 타입으로 변환

// 9.2.3 불리언 타입으로 변환

// 9.3 명시적 타입 변환

// 9.3.1 문자열 타입으로 변환
// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 타입 => 문자열 타입
String(1);          // "1"
String(NaN);        // "NaN"
String(Infinity);    // "Infinity"

// 불리언 타입 => 문자열 타입
String(true);        // "true"
String(false);       // "false"

// 2. Object.prototype.toSring 메서드를 이용하는 방법
(1).toString();     // "1"
//...

// 3. 문자열 연결 연산자를 이용하는 방법
1 + '';
//...

// 9.3.2 숫자 타입으로 변환
// 1.Number 생성자 합수를 new연산자 없이 호출하는 방법
// 문자열 타입 => 숫자 타입
Number('0');        // 0
Number('-1');       // -1
Number('10.53');    // 10.53

// 불리언 타입 => 숫자 타입
Number(true);       // 1
Number(false);      // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)

parseInt('0');
// ...
 
// 3. + 단항 산술 연산자를 이용하는 방법
+'0';
// ...

// 4. * 산술 연산자를 이용하는 방법
'0' * 1;
// ...


// 9.3.3 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 타입 -> 불리언 타입
Boolean('x');       // true
Boolean('0');       // true
Boolean('');         // false
Boolean('false');    // true

// 숫자 타입 => 불리언 타입
Boolean(0);          // false
Boolean(1);         // true
Boolean(NaN);        // false
Boolean(Infinity);   // true

// null 타입
Boolean(null);       // false

// undefined 타입
Boolean(undefined);  // false

//객체 타입
Boolean({});         // true
Boolean([]);         // true


// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
!!'x';
//...

/// 9.4 단축 평가

// 9.4.1 논리 연산자를 사용한 단축 평가

'Cat' && 'Dog';  // Dog
// && 연산자의 경우 두개가 다 true여야 true를 반환
// 따라서 앞에 값이 true 이므로 뒤에 값에 따라 결과가 반영되므로 Dog를 반환

console.log('Cat' && 'Dog');


'Cat' || 'Dog';     //  'Cat'
// ||연산자의 경우 둘잘 하나만 true여도 true를 반환하기 때문에 좌항에서 우항으로 평가
// 좌항인 'Cat'이 true 값이 므로 'Cat'을 반환

// 논리곱 연산자
console.log('Cat' && 'Dog');        // 'Dog'
console.log(false && 'Dog');        // false
console.log('Cat' && false);        // false

// 논리합 연산자
console.log('Cat' || 'Dog');        // 'Cat'
console.log(false || 'Dog');        // 'Dog'
console.log('Cat' || false);        // 'Cat'


// 단축평가를 사용하게되면 if문을 대체할 수 있다.


var done = true;
var message = '';

if(done) message = '완료';

message = done && '완료';
console.log(message);

// 조건이 거짓 값일 때 무언가를 해야한다면 논리 합 연산자 표현식을 사용한다

var done = false;
var message = '';


if(!done) message = '미완료';

message = done || '미완료';
console.log(message);

// 삼항 조건 연산자는  if...else 문을 대체할 수있다.

// 단축평가는 객체를 사용할때 유용하게 사용된다.

// 9.4.2 옵셔널 체이닝 연산자

//?.
//좌항의 피 연산자가 null또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var elem = null;

var value = elem?.value;
console.log('value is: ' + value);


// elem이 Falsy값이면 elem으로 평가되고, elemm이 Truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log('value is: ' + value);

var str = '';
// 좌항이 ''이기 때문에 Falsy값 따라서 str로 평가됨
var length = str && str.length;
console.log(length);        // ''길이 참조 불가 

var length = str?.length;
console.log(length);        // 0

// 9.4.3 null 병합 연산자

//??
// 좌항의 피 연산자가 null또는 undefined인 경우 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다.
// null 변합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

var foo = null ?? 'default string'
console.log(foo);       // default string

// 좌항이 Falsy값이라도 null또는 undefined가 아닌경우 좌항을 반환한다.
var foo = '' ?? 'default string'
console.log(foo);       // ''



