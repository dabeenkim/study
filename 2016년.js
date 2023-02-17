
// a	b	result
// 5	24	"TUE"



function solution(a, b) {
    var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    let today = new Date(2016, a-1, b).getDay() //대소문자주의!!!!
    
    
    return week[today];
}