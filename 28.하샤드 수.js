// arr	return
// 10	true
// 12	true
// 11	false
// 13	false


function solution(x) {
    var answer = 0;
    var num = String(x).split("");
    
    for(let i = 0; i < num.length; i++){  //괄호가 if까지 들어가있어서 i가 제대로 출력이 안됐다.
        answer += Number(num[i])          //num[i]값들을 Number숫자로 변경해서 answer에 더해준다.
    }
    if((x % answer) == 0) {
        return true;
    }else{
       return false;
    }       
}
