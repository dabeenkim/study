// participant	                                       completion	                                return
// ["leo", "kiki", "eden"]	                           ["eden", "kiki"]	                             "leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	            ["stanko", "ana", "mislav"]	                "mislav"


function solution(participant, completion) {
    var answer = '';
    const part = participant.sort();        //오름차순하기
    const com = completion.sort();
    console.log(part, com)
    
    
    for(let i = 0; i < participant.length; i++){
        // part[i] === com[i] ? "" : part[i]
        if(part[i] !== com[i]) {
            return part[i]           //answer = part[i]로 썻을땐 오류가 났는데 리턴으로하니깐 실해오댓다.
        }
        
    }
    
}
