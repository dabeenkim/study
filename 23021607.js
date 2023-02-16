//내적

//    a	            b	            result
// [1,2,3,4]	    [-3,-1,0,2]	     3
// [-1,0,1]     	[1,0,-1]	    -2



function solution(a, b) {
    let result = 0;
    for (let i in a) {              //for(let i = 0; i < a.length; i++)과 같다.
        result += a[i] * b[i]       //a[i]번째로 들어온 값과 b[i]번째 들어온 값을 곱해서 result에 더해준다.
    }
    return result
}

