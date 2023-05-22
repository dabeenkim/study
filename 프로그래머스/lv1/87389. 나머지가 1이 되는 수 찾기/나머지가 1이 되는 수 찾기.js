function solution(n) {
    var answer = 0;
    console.log(n)
    for(let i = 0; i < n; i++){
        if(n%i === 1){
            return i
        }
    }
    return answer;
}