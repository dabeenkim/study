// n	return
// 121	144
// 3	-1


function solution(n) {
    var answer = 0;
    num = Math.sqrt(n)            //n의 값의 제곱이되는 수를 구해준다.
    // console.log(num)
    // console.log((num+1)*(num+1))
    if(num % 1 == 0) {            //num를 1로 나누었을때 값이 0이면 제곱이 된거니깐
        answer = (num+1)*(num+1)  //num+1을 한 값을 곱해서 answer에 넣어준다.
    }
    else{answer = -1}              //아니라면 answer에 -1을 넣어준다.
    return answer;
}