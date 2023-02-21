// n	    return
// 12345	[5,4,3,2,1]


function solution(n) {
    var answer = [];
    str = n.toString().split("").reverse() //우선 숫자를 문자열로 바꾼뒤 ""split기준으로 나눠서 .reverse로 거꾸로 뒤집어준다.
    
    for(let i = 0; i < str.length; i++) {
       answer.push(Number(str[i]))          //str의 배열에서 i번째값들을 가져와서 answer에 Number로 변환해서 푸시해준다.
    }
    
    return answer;
}
