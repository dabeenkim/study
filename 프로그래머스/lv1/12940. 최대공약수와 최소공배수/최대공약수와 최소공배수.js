function gcd(n,m) {
    if(m === 0) {
        return n
    }
    return gcd(m, n % m)
}

function lcm(n, m){
    const gcdValue = gcd(n,m)
    return(n * m) / gcdValue
}

function solution(n, m) {
    var answer = [];
    const resultGCD = gcd(n,m)
    const resultLCM = lcm(n,m)
    answer.push(resultGCD, resultLCM)
    return answer;
}