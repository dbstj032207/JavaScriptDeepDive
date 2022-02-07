
// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee'};

var users = [
    {id:1, name: 'Lee'},
    {id:2, naem: 'Kim'}
]

var result = 10 + 20;

//선언 후 값을 할당하지않으면 undefined라는 값이 암묵적으로 할당되어 초기화된다.

//선언이 뒤에있지만 자바스크립트에서는 변수 선언이 먼저 실행되고 이후에 코드가 실행되므로 정상 작동하게된다.
console.log(score);
var score;

//4.5 값의 할당 할당시 본래 주소가 아닌 새로운 주소에 값을 다시 할당해줌
score = 80;

//이렇게 선언하더라도 실제로는 undefined로 할당한 후 새로 90의 값을 다른 주소에 할당
var score2 = 90;

console.log(score);
console.log(score2);

//const 변수는 값의 재할당 불가
const foo = 10;


console.log(foo);
//foo = 20; 에러 발생

console.log(foo);

//여러개 동시 선언가능, but 가독성을 위해 지양
var person, $elem, _name, first_name, val1;

//ES5부터 유니코드 문자를 허용하므로 한글이나 일본어 식별자도 사용가능
//하지만 권장하지 않음
var 이름, なまえ;

なまえ = 1;

console.log(なまえ);

/* syntax 에러
var first-name; //-사용불가
var 1st;        //숫자를 맨앞에 사용불가
var this;       //예약어 사용불가
*/

//대소문자를 구분하므로 세개 변수 모두 다름
var firstname;
var firstName;
var FIRSTNAME;

//변수 선언에 별도의 주석이 필요하지 않을만큼 직관적인 변수를 사용하자
var x = 3;          //x
var score = 100;    //okay

var d;                  //x
var elapsedTimeInDays;  //okay


//네이밍 컨벤션 : 하나 이상의 영어 단어로 구성된 식별자를 만들 때
//                  가독성 좋게 단어를 한눈에 구분하기 위해 규정한 명명 규칙

//카멜 케이스
var firstName;          //주로 변수나 함수에 쓰임

//스네이크 케이스
var first_name;

//파스칼 케이스
var FirstName;          //주로 생성자 함수, 클래스 이름에 쓰임

//헝가리언케이스
var strFirstName; // 타입 + 식별자
var $elem = document.getElementById('myId'); //DOM 노드
var observable$ = fromeEvent(document, 'click'); //RxJS 옵저버블


//카멜과 파스칼을 사용하자!



