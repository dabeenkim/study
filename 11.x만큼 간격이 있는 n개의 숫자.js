// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]



function solution(x, n) {
    var answer = [];
    
    for(let i = 1; i <= n; i++){        //n까지의 수를 구한뒤 그 값을 각각 x에 곱해줘서 answer에 푸시해줌
                                        //let i = 0으로 시작하면 0부터나오기때문에 1부터 시작한다.
                                        //n이랑 같아질때까지 수를 구해야하기 때문에 <=을해준다.
        answer.push(x*i)
    }
    return answer;
}
