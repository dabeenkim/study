// arr	            answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	    [4,3]


function solution(arr)
{
    var answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
        //arr[i]번째와 arr의 i번째의 다음수와 비교를 해야하기 때문에 +1을 해준다.
            answer.push(arr[i])
        }
    }
    
    
    return answer;
}
