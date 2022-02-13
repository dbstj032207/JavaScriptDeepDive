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
