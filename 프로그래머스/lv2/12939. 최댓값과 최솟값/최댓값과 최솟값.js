function solution(s) {
    var answer = [];
    number = s.split(" ").sort((a, b)=> a-b)
    answer.unshift(number[0]) && answer.push(number.slice(-1))
    return answer.join(" ");
}