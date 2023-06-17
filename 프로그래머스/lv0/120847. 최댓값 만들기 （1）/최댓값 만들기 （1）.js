function solution(numbers) {
    let num = numbers.sort((a,b)=>b-a)
    var answer = num[0]*num[1]
    return answer;
}