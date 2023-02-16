//나누어떨어지는 숫자 배열

// arr	            divisor	    return
// [5, 9, 7, 10]	    5	    [5, 10]
// [2, 36, 1, 3]	    1	    [1, 2, 3, 36]
// [3,2,6]	            10	    [-1]



function solution(arr, divisor) {
    var answer = [];                    //빈배열을 만들어준다.
    for(i = 0; i < arr.length; i++) {   //arr의 length보다 작을때까지 i를 i++만큼 늘려준다.
        if(arr[i] % divisor == 0) {     //arr[i]값을 divisor로 나눠서 값이 0이면
            answer.push(arr[i])         //그 arr[i]값을 answer의 빈배열에 넣어준다.
        }
    }
    if(answer.length == 0) {            //만약 answer에 채워진 값이 없어 0과 동일하면
        answer.push(-1);                //-1이라는 값을 answer에 넣어준다.
    }
    answer.sort((a,b) => a - b);        //.sort라는 함수를 이용해서 오름차순으로 설정해준다.
    return answer;
    
}


// ## .sort
//   배열.sort()를 사용하면 오름차순으로 정렬된다.
//   내림차순으로 정렬하려면 비교하는 내용이 들어가야한다.
//  arr.sort(function(a, b) {
//     if(a < b) return 1;
//     if(a > b) return -1;
//     if(a === b) return 0;
//      });