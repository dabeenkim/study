// "one4seveneight" 	1478
// "23four5six7"	    234567
// "2three45sixseven"	234567
// "123"	            123

//문제
//숫자를 영어로 써놓은 것을 다시 숫자로 바꿔라


function solution(s) {
    var answer = s;
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    
    for(let i = 0; i < num.length; i++) {

        //split으로 영문으로 표기된 숫자를 기준으로 자른다.
        let arr = answer.split(num[i]);  
        
        //arr값을 받아와서 i번째 값을 join으로 넣어준다.
        answer = arr.join(i);
    }
    //문자열을 숫자로 치환
    return Number(answer);
}
