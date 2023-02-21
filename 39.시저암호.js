// s	    n	result
// "AB"	    1	"BC"
// "z"	    1	"a"
// "a B z"	4	"e F d"

// n만큼 뒤로 밀어서 소문자면 소문자
// 대문자면 대문자로 바꿔줘라


function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    var answer = '';

    //s의 length를 받아준다
    for(let i = 0; i < s.length; i++){

        //str을 선언해서 s[i]번째값을 넣어준다.
        const str = s[i];

        //값을 줄때 공백이 있기때문에 answer에 공백을 더해준다.
        if(str === ' ') {
            answer += ' ';
            //if문에서 공백을 만나면 다시 위로 돌아가서 다시진행한다.
            continue;
        }
        //upper의 includes로 str의 값을 비교했을때 true면 upper로 false면 lower로 대입할수있게만든다.
    const uplower = upper.includes(str) ? upper : lower;

    //위에서 구한 값으로 indexOf(str)을해서 그 값의 인덱스번호를 뽑은뒤 n을 더해준다.
    let index = uplower.indexOf(str) + n;

    //index의 크기가 uplower의 length보다 크면 
    if(index >= uplower.length) {

        //index에 uplower.length값을 빼줘서 z다음엔 a로 돌아올수 있게만들어준다.
        index -= uplower.length;
    }
        //위에서 구한 인덱스값으로 uplower에서 인덱스번호로 가져와서 answer에 더해준다.
        answer += uplower[index];
    }
    return answer;
}