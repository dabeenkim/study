//2016년 요일계산하기

// a	b	result
// 5	24	"TUE"


function solution(a, b) {
    
    const DAY = ['SUN','MON','TUE','WED','THU','FRI','SAT']   //DAY라는 배열을 선언해준다.
    const today = new Date(2016, a-1, b).getDay()             //new Date(년, 월 ,일)을 넣어서 .getDay()로 요일에 해당하는 숫자를 받는다.
    console.log(today)
    return DAY[today];                                        //DAY값에 today의 값을 넣어줘서 수에 해당하는 요일을 찾는다.
}


// ## getDate()

//   현재 날짜에 해당하는 숫자를 반환한다.
  
// ## getDay()

//   현재 요일에 해당하는 숫자를 반환한다.
