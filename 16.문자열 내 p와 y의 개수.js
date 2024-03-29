//  s	        answer
// "pPoooyY"	true
// "Pyy"	    false


function solution(s){
    var answer = 0;
    let str = s.toLowerCase();          //s를 전부 소문자로 바꿔주는 코드를 사용함
    
    for(let i = 0; i < s.length; i++){
        if(str[i] === 'y'){answer += 1} //str이 소문자로 바꿔준 곳이니깐 거기서 i번째에 y값을 찾아 +1해준다.
        if(str[i] === 'p'){answer -= 1} //이번엔 P를 찾아 -1을 해준다.
    }
    
    return answer === 0 ? true : false; //개수가 같으면 참을 내보내줘야하니깐 0이면 true를 내보낸다.
}
