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