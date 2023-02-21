//   s	                return
// "try hello world"	"TrY HeLlO WoRlD"


function solution(s) {
    var answer = [];
    words = s.split(" ")
    
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            
            if(j % 2 == 0) {

                answer += words[i][j].toUpperCase();
            }else{
                answer += words[i][j].toLowerCase();
            }
    
        }answer += " "
    }answer = answer.slice(0,-1)  //앞에서 부터0번째자리 뒤에서부터 -1번째자리
    return answer;
}
