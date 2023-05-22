function solution(n) {
    var answer = [];
    let number = 0
    for(let i = 1; i <= n; i++){
        if(n%i===0){
            answer.push(i)  
    }
    }for(let j = 0; j < answer.length; j++){
        number += answer[j]
    }
    
    return number;
}

// function solution(n) {
//answer [ 1, 2, 3, 4, 6, 12 ]
//answer [ 1, 5 ]
//     var answer = [];
//     for(let i = 1; i <= n; i++) {
//     if(n%i== 0){
//         answer.push(i)
//     }if(answer[i]+answer[i] === n){
//         for(let j = 0; j < answer.length; i++){
//             let num = answer[j] + j
//             return answer
//         }
//     }
//     }
//     return answer;
// }
