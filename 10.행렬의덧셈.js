//행렬의 덧셈


// arr1	           arr2	          return
// [[1,2],[2,3]]	  [[3,4],[5,6]]	  [[4,6],[7,9]]
// [[1],[2]]	      [[3],[4]]	      [[4],[6]]



      function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {      //i를 arr1의 length보다 작을때까지 i++해서 1씩늘려줘라
        answer[i] = [];                          //answer[i]로 i값이 들어올 배열을 만든다.
    for (let j = 0; j < arr2[i].length; j++){    //j를 arr2[i]번째 값의 length보다 작을때까지 1씩 늘려준다.
        answer[i][j] = arr1[i][j] + arr2[i][j]   //arr1번의 0번째값인 1과 arr2의 0번째값인 3을 더해서 answer[i]값에 넣어준다.
}                                                //이런식으로 i번 j번을 더해주면서 넣어주면된다. 
}
    return answer;
}
