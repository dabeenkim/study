function solution(age) {
    var date = new Date()
    var answer = date.getFullYear()-age
    return answer;
}