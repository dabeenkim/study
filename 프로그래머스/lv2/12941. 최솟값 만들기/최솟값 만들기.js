function solution(A,B){
    let sortA = A.sort((a,b)=> a - b)
    let sortB = B.sort((a,b)=> b - a)
    var answer = 0;
    for(let i = 0; i < A.length; i++){
        answer = answer+(sortA[i]*sortB[i])
    }

    return answer;
}