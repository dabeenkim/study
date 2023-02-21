//  a	        b	            result
// [1,2,3,4]	[-3,-1,0,2]	    3
// [-1,0,1]	    [1,0,-1]	    -2



function solution(a, b) {
    var answer = 0;
    
    for(let i = 0; i < a.length; i++){ //a의 length값을 받아와서 i를 length보다 작을때까지 1씩 늘려주고
        answer += a[i]*b[i]            //a[i],b[i]번째값을 곱해서 answer에 더해준다
    }
    return answer;
}
