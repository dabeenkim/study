// numbers	    result
// [2,1,3,4,1]	[2,3,4,5,6,7]
// [5,0,2,7]	[2,5,7,9,12]


function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        //매번 이중for문을 쓸때마다 j++가 아닌 i++를 쓰는 실수를 한다. 확인잘하기
        //i에 계속 i를 더하면 안되기때문에 i의 다음값과 더해주기위해 i+1을 해준다.
        for(let j = i + 1; j < numbers.length; j++){
           answer.push(numbers[i] + numbers[j]);
        }
        //new Set을 이용해 중복되는 숫자들을 제거한다.
    }let set = [...new Set(answer)];
        //sort를 이용해 오름차순으로 만들어줫다.
    return set.sort((a,b) => a-b);
}
