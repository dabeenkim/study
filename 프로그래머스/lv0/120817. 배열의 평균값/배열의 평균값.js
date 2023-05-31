function solution(numbers) {
    var answer = 0;
    console.log(numbers.length)
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i]
    }
    return answer/numbers.length;
}