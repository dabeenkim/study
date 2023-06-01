function solution(t, p) {
    var answer = 0;
    let length = p.length
    let count = 0
    for(let i = 0; i < t.length; i++){
        answer = t.slice(i, length+i)
        if(answer.length === length && answer <= p){
            count++
        }
    }
    return count;
}