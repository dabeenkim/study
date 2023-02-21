// strings	                n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

function solution(strings, n) {
    var answer = [];
    
        //strings를 오름차순 정렬시킨다음
        //a의 n번째인덱스가 더 크면 오름차순으로 정렬하고
        //같으면 기존의 오름차순을 유지한다.
        return strings.sort().sort((a,b) => (a[n] >= b[n]? 1 : -1));
}
