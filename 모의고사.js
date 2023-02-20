// answers	    return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]


function solution(answers) {   
    //abc번 수포자들의 연속되는 값들을 적어줌 
    const A = [1, 2, 3, 4, 5]
    const B = [2, 1, 2, 3, 2, 4, 2, 5]
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    //몇개를 맞혔는지 확인할곳
    const result = [0, 0, 0]
    
    for(let i = 0; i < answers.length; i++){
        //각 abc의 배열만큼을 나누기 해준후
        //answers의 i번째와 같은 답이 있으면 result에 1씩더해준다.
        if(A[i % 5] === answers[i]) result[0] ++;
        if(B[i % 8] === answers[i]) result[1] ++;
        if(C[i % 10] === answers[i]) result[2] ++;
    }
    const answer = [];
    //result의 최댓값을 찾아준다.
    const first = Math.max(...result);
    //많이 맞춘사람의 인덱스 번호를 가져올곳
    let index = 0;
    //3명의 인덱스값만 필요하기때문
    for(let i=0; i < 3; i++){
        //result최대값이 result의 i값과 같으면
        if(first === result[i]){
            //인덱스값은 0부터 시작하기 때문에 i+1을 해준다.
            answer[index] = i + 1;
            index++
        }
        
        }return answer;
    }
    
