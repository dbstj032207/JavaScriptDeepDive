5 + 2;
5 - 2;
5 * 2;
5 / 2;
5 % 2;

var x = 1;

x++;

console.log(x);

x--;
console.log(x);



var x = 5, result;

//선할당 후증가
result = x++; 
console.log(result, x);


//선증가 후할당
result = ++x;
console.log(result, x);

//선할당 후감소
result = x--;
console.log(result, x);

//선감소 후할당
result = --x;
console.log(result, x);


var x = '1';

console.log(typeof(x));
console.log(typeof(+x));    // 문자열을 숫자로 타입 변환
console.log(+x);
console.log(x);             //부수효과는 없음

x = true;
console.log(typeof(x));
console.log(typeof(+x));    // 불리언 값을 숫자로 타입 변환
console.log(+x);            // 1
console.log(x);             //부수효과는 없음

x = false;
console.log(typeof(x));
console.log(typeof(+x));    // 불리언 값을 숫자로 타입 변환
console.log(+x);            // 0
console.log(x);             //부수효과는 없음

x = 'Hello';
console.log(typeof(x));
console.log(typeof(+x));    // 문자열을 숫자로 변환할 수 없으므로 NaN을 반환, 하지만 타입은 숫자로 변환됨
console.log(+x);
console.log(x);             //부수효과는 없음

//-도 마찬가지 (부호 변환됨)

// 7.1.3 문자열 연결 연산자

// 문자열 연결 연산자
'1' + 2;    // '12'
1 + '2';    // '12'

// 산술 연산자
1 + 2;      // 3

// true는 1로 타입 변환됨
1 + true;   // 2

// false는 0으로 타입 변환됨
1 + false;  // 1

// null은 0으로 타입 변환됨
1 + null;   // 1

// undefined는 숫자로 변환되지 않음 => NaN
+undefined;     // NaN
1 + undefined;  // NaN

// 7.2 할당 연산자
var x;

x = 10;
console.log(x);

x += 5;             // x = x + 5
console.log(x); 

x -= 5;             // x = x - 5
console.log(x);

x /= 5;             // x = x / 5 
console.log(x);

x *= 5;             // x = x * 5
console.log(x);

x %= 5;             // x = x % 5
console.log(x);

var str = 'My name is ';
str += 'Lee';       // str = str + 'Lee'
console.log(str);


var y;
console.log(y = 10);    //할당문은 표현식인 문이다.
console.log(y);


var a, b, c;

//연쇄할당, 오른쪽에서 왼쪽으로 진행
a = b = c = 0;

console.log(a, b, c);


// 7.3 비교연산자

// 동등 비교
console.log(5 == 5);

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
console.log(5 == '5');

// 동등 비교는 결과를 예측하기 어렵다.
console.log('0' == '');     //false
console.log(0 == '');       //true
console.log('0' == 0);      //true
console.log(false == 'false');      //false
console.log(false == '0');          //true
console.log(false == null);         //false
console.log(false == undefined);    //false


// 그렇기 때문에 일치 비교 연산자를 사용한다
// 암묵적 타입 변환을 하지 않고 값을 비교한다.
console.log(5 === '5');


// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN);       //false

// Number.isNaN()함수
// ()안의 지정한 값이 NaN인지 판독하는 함수
// NaN이면 true, 아니면 false를 반환한다.
console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1 + undefined));   //true


// 양의 0과 음의 0의 비교
console.log(0 === -0);      //true
console.log(0 == -0);       //true


// object.is()에서는 구분됨
console.log(Object.is(0, -0));      //false
// NaN도 같게 처리함
console.log(Object.is(NaN, NaN));   //true


// 부동등비교 !=
5 != 8;         //true
5 != 5;         //false
5 != '5';       //false

// 불일치비교 !==
5 !== 8;         //true
5 !== 5;         //false
5 !== '5';       //true

// 대소 관계 비교 연산자 >, <, >=, <=

