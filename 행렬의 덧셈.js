//     arr1	        arr2	         return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	    [[3],[4]]	    [[4],[6]]



function solution(arr1, arr2) {
    var answer = [];
    
    
    for(let i = 0; i < arr1.length; i++){           //arr1의 length보다 작을때까지 1씩늘려준다.
    var num = [];                                   //이값이 for문 밖에 있으면 계속 돌기때문에 값이 여러번들어간다.
        for(let j = 0; j < arr1[0].length; j++){    //arr1의 0번째 index에 length보다 작을때까지 1씩늘려준다.
            num.push(arr1[i][j] + arr2[i][j])       //num값의 []안에 arr1의 [i],[j]번째값, arr2의 [i],[j]번째값을 푸시해준다.
        } answer.push(num)                          //num값을 answer에 푸시해준다.
    }
    
    return answer;
}