
//10 + 20 은 평가되어 숫자 값 30을 생성한다.
10 + 20; //30

//변수에는 10 + 20이 평가되어 생성된 숫자 30이 할당된다.
var sum = 10 + 20;

/////5.2 리터럴

//숫자 리터럴 3
3;

/////5.3 표현식

var score = 100; //리터럴도 그 자체로 표현식

var score = 50 + 50;

console.log(score);

//리터럴 표현식
10;
'Hello';


var sum = 0;
var person =  {id: 1, name: 'Lee'};
var arr = [1, 2, 3]


//식별자 표현식(선언이 되어있다고 가정)
sum;
person.name;
arr[1];

//연산자 표현식
10 + 20;
sum = 10;
sum !== 10;


// 함수/메서드 호출 표현식(선언이 되어있다고 가정)
//square()
//person.getName()

var x = 1 + 2;

x + 3;

console.log(x);

//////5.4 문

// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo(){}

//조건문
if (x>1){
    console.log(x);
}

//반복문
for(var i = 0; i < 2; i++){
    console.log(i);
}


//변수 선언문은 값으로 평가될 수 없으므로 표현식이 아니다.
var x;

// 1, 2, 1 + 2, x = 1 + 2는 모두 표현식이다.
// x = 1 + 2는 표현식이면서 완전한 문이기도 하다.
x = 1 + 2;


