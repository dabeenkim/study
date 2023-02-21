// n	result
// 45	7
// 125	229


function solution(n) {
    var answer = 0;
    // 10진법으로 나타냈던 숫자를 3진법으로 바꿔준다.
    var tr = n.toString(3);
    // 3진법으로 나타낸 숫자를 뒤집어준다.
    var arr = tr.split('').reverse().join('');
    // 3진법으로 되어있는 것을 다시 10진법으로 돌려준다.
    answer = parseInt(arr, 3);

    console.log(tr,arr)
    
    // let answer = n.toString(3).split("").reverse().join("");
    
    // return parseInt(answer, 3);
    return answer
}
