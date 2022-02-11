/////// 8 제어문

/// 8.1 블록문

//블록문
{
    var foo = 10;
}

//제어문
var x = 1;
if (x < 10){
    x++;
}

//함수 선언문
function sum(a, b){
    return a + b;
}


/// 8.2 조건문

var num = 2;
var kind;

if(num > 0){
    kind = '양수';
}

console.log(kind);

if(num > 0){
    kind = '양수';
}else{
    kind = '음수';
}

console.log(kind);

if(num > 0){
    kind = '양수';
}else if(num < 0){
    kind = '음수';
}else{
    kind = '영';
}

console.log(kind);

//문이 하나일경우 중괄호 생략 가능
if(num > 0)         kind = '양수';
else if(num < 0)    kind = '음수';
else                kind = '영';

console.log(kind);

// if else문은 삼항조건 연산자로 바꿔쓸 수 있다. (앞에서 한 내용)

// 8.2.2 switch문
var month = 11;
var monthName;

switch(month){
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}

console.log(monthName); //Invalid month

switch(month){
    case 1: monthName = 'January'
        break;
    case 2: monthName = 'February'
        break;
    case 3: monthName = 'March'
        break;
    case 4: monthName = 'April'
        break;
    case 5: monthName = 'May'
        break;
    case 6: monthName = 'June'
        break;
    case 7: monthName = 'July'
        break;
    case 8: monthName = 'August'
        break;
    case 9: monthName = 'September'
        break;
    case 10: monthName = 'October'
        break;
    case 11: monthName = 'November'
        break;
    case 12: monthName = 'December'
        break;
    default: monthName = 'Invalid month';
}

console.log(monthName); //November

// break를 생략하여 여러개의 조건문을 하나로 활용할 수 있다.

var years = 2000;
var month = 2;
var days = 0;

switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2: 
        // 윤년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020, ...)는 윤년이다
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지는 해 (2000, 2100, 2200, ...)는 평년이다
        // 3. 연도가 400으로 나누어떨어지는 해(2000, 2400, 2800)는 윤년이다

        if (years % 4 === 0){
            if(years % 100 === 0){
                
                if(years % 400 === 0){
                    days = 29;
                }else{
                    days = 28;
                }
            }else{
                days = 29;
            }
        } else{
            days = 28;
        }
        
        break;
    default:
        console.log('Invalid month')
}

console.log(days);


/// 8.3 반복문

// for문
for(var i = 0; i < 2; i++){
    console.log(i);
}

// 무한루프
//for ( ;; ){
//
//}

// while문
var count = 0;

while(count < 3){
    console.log(count);
    count++;
}

// 무한루프
//while(true){
//    
//}

count = 0;
while(true){
    console.log(count)
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3){
        break;
    }
}



