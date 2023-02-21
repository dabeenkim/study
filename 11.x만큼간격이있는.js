//x만큼 간격이 있는 n개의 숫자


// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]


function solution(x, n) {
    var answer = [];                //빈배열을 만들어줌
    for(let i = 1; i < n+1; i++){   //i를 1로 시작하고 인덱스 번호는 0부터 시작하기때문에 +1혹은 <=로 만들어준다
        answer.push(x*i)            //x에 들어온 값을 i번만큼 곱해줘서 answer에 넣어준다.
    }
                    
    return answer;
}
