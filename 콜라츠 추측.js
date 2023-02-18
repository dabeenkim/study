// n	    result
// 6	    8
// 16	    4
// 626331	-1

function solution(num) {
    var answer = 0;
    console.log(num)
    
    for(let i = 0; i < 500; i++){   //500번까지만 확인을 할것이기때문에
        if(num % 2 == 0){           //num값을 2로 나눴을때 나머지가 0이면
            num = num/2;            //num을 2로 나눠서 num값에 다시넣어줌
        }else if(num == 1){         //num 값이 1이나오면
            return i;               //1이될때까지 돌았던 i번을 리턴해준다.
        }else if(num % 2 == 1){     //num을 2로 나눳을때 나머지가 1이면
            num = (num*3)+1;        //num값에 3을곱한뒤 1을 더해준값을 num에 넣어준다.
        }
    }return -1                      //다 돌았는데도 해당이 없으면 -1을 리턴해줘라
}


function solution(num) {
    var answer = 0;
    console.log(num)
for(let i = 0;  i < 500; i++){                  //500번까지만 돌림
    if(num != 1){                               //num이 1이 아닐때
        num = num % 2 == 0 ? num/2 : (num*3)+1; //num을 2로나눠서 0이라면 num/2 아니면 num*3에 1을 더해준다.
    }else{
        return answer = i;                      //num이 1이맞다면 answer에 지금까지 돈 i값을 넣어준다.
    }
}return answer = -1;                            //500번을 돌았는데도 1이 되지않으면 -1을 리턴해준다.
}