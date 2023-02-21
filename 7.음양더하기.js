function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i = 0; i < signs.length; i++) {
        signs == true ? answer += absolutes(i) : answer -= absolutes(i);
    }
    return answer;
}

function solution(arr) {
    return arr.reduce((a,b)=>a+b)/arr.length;
    }
