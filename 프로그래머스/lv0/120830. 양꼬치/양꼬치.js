function solution(n, k) {
    var answer = n*12000 + k*2000
    if(n/10 >= 1){
        console.log(parseInt(n/10))
        answer -= parseInt(n/10) *2000
    }
    return answer;
}