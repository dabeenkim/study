//부족한 금액 계산하기

// price	money	count	result
//  3	    20	     4	     10



function solution(price, money, count) {
    let answer = 0;
    
    for(let i = 1; i <= count; i++) {        //count값에 들어온만큼 i의 값을 1번째부터 i++만큼 증가시킨다.
     answer += price * i;                    //answer에 price로 들어온가격의 i번만큼 곱해준뒤 더해준다.
     console.log(answer)      
    }    
    return money > answer ? 0 : answer-money  // answer에 들어온 값보다 money가 크면 true기 때문에 0이 반환된다.
                                              // money보다 커지면 answer에서 money를 뺀가격이 출력된다.
}

// ## 삼항연산자 ?

//   2항연산자       3항연산자
//     n > 5         n > 5 ? true : false

// 기본적인 표현은

// (조건)? value1 : value2