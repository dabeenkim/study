// n	    return
// 118372	873211


function solution(n) {
    var answer = 0;
    return parseInt(n.toString().split("").sort((a, b) => {return b-a}).join(""))
    return answer;
}


// 1) n.toString() : 숫자를 문자열로 변환 해주는 함수 

// 2) split("") : 문자열을 한글자씩 잘라서 배열에 담아주는 함수

// 3) sort((a,b)=>{return b-a}) : 내림차순 해주는 함수

// 4) join("") : 배열의 모든 요소를 연결해서 하나의 문자열로 만든다.

// 5) parseInt() : 문자열을 숫자로 변환 해주는 함수
