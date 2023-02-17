// N	answer
// 123	6
// 987	24



function solution(n)
{
    var answer = 0;
    str = String(n)                     //n을 문자열로 바꿔줘서 배열을 만들어준다.
    
    for(let i = 0; i < str.length; i++){ //문자열에서 i번째값을 찾아낸다
        answer += parseInt(str[i]);      //parseInt(str[i]) string을 정수로 변환한 값을 리턴한다.
                                         //string의 첫글자를 정수로 변경할수없으면 NaN값으로 리턴한다.
    }

    return answer;
}