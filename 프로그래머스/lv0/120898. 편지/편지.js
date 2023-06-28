function solution(message) {
    var answer = 0;
    for(let i = 0; i < message.length; i++){
        if(message[i]){
            answer++
        }
    }
    return answer*2;
}