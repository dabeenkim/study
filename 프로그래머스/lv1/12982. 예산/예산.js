function solution(d, budget) {
    let answer = 0
    let sort = d.sort((a,b) => a - b)
    let count = 0
    for(let i = 0; i < sort.length; i++){
        if(answer+sort[i]<=budget){
            answer += sort[i]
            count++
        }
    }
    return count;
}