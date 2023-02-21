// arr	        return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

function solution(arr) {
    var answer = [];
    var min = arr.indexOf(Math.min(...arr));
    arr.splice(min,1);
    console.log(arr);
    // console.log(num)
    
    return arr.length === 0 ? [-1] : arr;
    
    //     if(arr.length == 0){ 
    //         return [-1];
    //     }else{
    //         return arr;
    //     }
 }
