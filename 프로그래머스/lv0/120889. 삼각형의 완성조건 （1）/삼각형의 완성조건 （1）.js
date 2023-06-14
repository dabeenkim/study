function solution(sides) {
    let num = sides.sort((a,b) => a - b)
    var answer = 0;
    if(sides[0]+sides[1] <= sides[2]){
      return 2
    }else{
        return 1
    }
    return answer;
}