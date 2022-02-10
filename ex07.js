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


/// 7.4 삼항 조건 연산자

// 조건식 ? 조건식이 true일때 반환할 값 : 조건식이 false일때 반환할 값

var x = 2;

// 2 % 2는 0 이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result);    //짝수

//if문으로 대체 가능
if(x % 2){
    result = '홀수';
}
else{
    result = '짝수';
}

console.log(result);    //짝수


// 하지만 둘의 차이점은 if문은 값처럼 사용할 수 없다는 것이다
// 선언과 동시에 사용 불가.

//var result = if... 불가


/// 7.5 논리 연산자

// 논리합(||) 연산자
console.log(true || true);      //true
console.log(true || false);     //true
console.log(false || true);     //true
console.log(false || false);    //false


// 논리곱(&&) 연산자
console.log(true && true);      //true
console.log(true && false);     //false
console.log(false && true);     //false
console.log(false && false);    //false


//논리 부정(!) 연산자
console.log(!true);
console.log(!false);

//암묵적 타입변환
!0;         //true
!'Hello';    //false

//단축평가
'Cat' && 'Dog';     //Dog


/// 7.6 쉼표 연산자

var x, y, z;
x = 1, y = 2, z = 3;    //3 : 왼쪽부터 피 연산자를 평가하고 마지막 피 연산자의 평가 결과를 반환한다.

/// 7.7 그룹 연산자
// () 소괄호를 통해 우선순위 지정

10 * 2 + 3;     //23
10 * (2 + 3);   //50


/// 7.8 typeof 연산자

console.log(typeof '');             //string
console.log(typeof 1);              //number
console.log(typeof NaN);            //number
console.log(typeof true);           //boolean
console.log(typeof undefined);      //undefined
console.log(typeof Symbol());       //symbol
console.log(typeof null);           //object
console.log(typeof []);             //object
console.log(typeof {});             //object
console.log(typeof new Date());     //object
console.log(typeof /test/gi);       //object
console.log(typeof function(){});   //function

var foo = null;

console.log(typeof foo === null);   //false
console.log(foo === null);          //true

// 선언하지 않은 변수에 typeof를 적용한 경우 undefined 반환
console.log(typeof undecleard);


/// 7.9 지수 연산자

console.log(2 ** 2);        //4
console.log(2 ** 2.5);      //5.656...
console.log(2 ** 0);        //1
console.log(2 ** -2);       //0.25

// 지수 연산자가 도입되기 이전에는 Math.pow 연산자를 사용
console.log(Math.pow(2, 2));

// 3개 이상의 지수를 표현할 때는 Math.pow를 사용하는것이 가독성이 좋다
console.log(2 ** (3 ** 2));
console.log(Math.pow(2, Math.pow(3, 2)));

// 음수를 거듭제곱의 밑으로 사용하려면 괄호로 묶어야한다
//console.log(-5 ** 2);   //syntax err
console.log((-5) ** 2);


// 지수 연산자는 다른 산술 연산자와 마찬가지로 할당 연산자와 함께 사용할 수 있다.
var num = 5;
num **= 2       //num = num ** 2  => 25

// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다
2 * 5 ** 2;     //50

/// 7.10 그 외의 연산자
// 뒤에서 다룸

/// 7.11 연산자의 부수 효과
/// 7.12 연산자 우선순위
/// 7.13 연산자 결합 순서






