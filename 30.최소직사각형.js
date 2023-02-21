// 명함 번호	가로 길이	세로 길이
//      1	        60	    50
//      2	        30	    70
//      3	        60	    30
//      4	        80	    40

//가로 크기에 최대크기를 모으고
//세로에 최소크기를 모아서 각각의 최댓값을 곱하면된다.

function solution(sizes) {
    var answer = 0;
    
    for(let i = 0; i < sizes.length; i++){
       if(sizes[i][0] < sizes[i][1]){
           [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
          
       }
    }let w = sizes.sort((a,b) => b[0]-a[0])[0][0];
     let h = sizes.sort((a,b) => b[1]-a[1])[0][1];
     //맨 마지막에 붙은 [0][0]; [0][1];이 붙지 않았을때의 콘솔로그
     //[ [ 18, 7 ], [ 11, 7 ], [ 19, 6 ], [ 16, 6 ], [ 14, 4 ] ] 
     //[ [ 18, 7 ], [ 11, 7 ], [ 19, 6 ], [ 16, 6 ], [ 14, 4 ] ]
     //각 배열마다 큰값들 기준으로 앞배열부터
     //작은값에서 큰값들 기준으로 앞배열부터 채워준다.

     //그다음 인덱스0번 0번의 최댓값
     //인덱스 0번에서의 1번의 최소값에서 최댓값을 구해서 곱해준다.
    return answer = w*h;
}

function solution(sizes) {
    // map()을 이용하여 width와 height를 정렬해준다
    // 물음표 연산자를 이용해 h가 크면 true 작으면 false로 h치와 w의 위치를 잡아준다.
    const resizes = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
  
    // 이값을 세팅하지않고 아래에서 바로 변수를 선언해주면
    // Math.max의 값에서 불어올수없기때문에
    let maxWidth = 0;
    let maxHeight = 0;
  
    resizes.forEach(([w, h]) => {
      // forEach()를 통해 하나씩 확인하면서
      // 가장 큰 값을 찾아준다.
      maxWidth = Math.max(maxWidth, w);
      maxHeight = Math.max(maxHeight, h);
    });
  
    // 가로 x 세로를 통해 크기를 구하고 반환한다.
    return maxWidth * maxHeight;
  }
