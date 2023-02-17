// n	return
// 3	"수박수"
// 4	"수박수박"


function solution(n) {
    var answer = '';
    
    // n % 2 === 0 ? "수" : "박"
    for(let i = 1; i <= n; i++){  //for문이 있어야 여러번돌기때문에 필요하다
    if(i % 2 === 0){
        answer += "박"
    }else{
        answer += "수"
    }}
    return answer;
}