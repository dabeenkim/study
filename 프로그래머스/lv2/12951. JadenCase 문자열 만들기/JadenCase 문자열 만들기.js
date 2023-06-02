function solution(s) {
    var answer = '';
    let split = s.split(" ")
    for(let i = 0; i < split.length; i++){
        let word = split[i]
        let lowerCase = word.toLowerCase()
        let modifyWord = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
        answer += modifyWord+" "
    }
    return answer.slice(0, -1);
}