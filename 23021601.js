//평균구하기

// arr	        return
// [1,2,3,4]	2.5
// [5,5]	    5





function solution(arr) {
    var answer = 0;
    
    for(var i = 0; i < arr.length; i++){ // i = arr의 갯수만큼 1씩증가시킴 
        answer += arr[i];  //answer에 arr의 값을 i번만큼 더해줘라
    }
    return answer/arr.length; //arr에 i만큼더한값을 arr.length로 나눠라
}