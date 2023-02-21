// arr	            divisor	    return
// [5, 9, 7, 10]	5	        [5, 10]
// [2, 36, 1, 3]	1	        [1, 2, 3, 36]
// [3,2,6]	        10	        [-1]


function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }}if(answer.length == 0){       //answer =[];이 이미 선언되어있어 0이니깐
        }answer.push(-1)                //answer.length를 받아와서 0이면 -1을 출력하게해준다. 
    answer.sort((a,b) => a-b);          //sort를 이용해 오름차순으로 만들어줌
    return answer;
}
