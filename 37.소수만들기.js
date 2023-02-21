// nums	result
// [1,2,3,4]	1
// [1,2,7,6,4]	4


//num을 3개골라 더햇을때 나오는 수중
//소수의 개수만 리턴하시요


function solution(nums) {
    var answer = 0;
    const len = nums.length;
    
    
    for(let i = 0; i < len; i++){

        //같은 수를 더하면 안되기때문에 i+1을 해준다
        for(let j = i+1; j < len; j++){

            //같은 수를 더하면 안되기때문에 j+1을 해준다
            for(let k = j+1; k < len; k++){
                //for문을 돌면서 더한수들을 sum을 선언해서 넣어준다.
                const sum = nums[i]+nums[j]+nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    
    return answer;
}
//소수를 구함
//소수는 1과 자신만으로 나누어떨어지기때문에

function isPrime(sum) {
    for(let i = 2; i < sum; i++)

    //이 부분에서 num이 다른수로 나눠떨어지면 소수가 아니다.
        if(sum % i === 0) return false;

        //소수는 1보다 큰 정수이기때문에 1보다 작으면 false리턴한다.
        return sum > 1;
    
}
