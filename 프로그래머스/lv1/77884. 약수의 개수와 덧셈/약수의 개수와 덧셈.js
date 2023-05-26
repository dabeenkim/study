function solution(left, right) {
    var count = 0;
    for(let i = left; i <= right; i++){
        let array = []
        for(let j = 0; j <= i; j++){
            if(i % j === 0) array.push(i)
        }
        count += array.length % 2 === 0 ? i : -i
    }
    return count
}