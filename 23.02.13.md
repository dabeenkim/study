###23.02.13 월요일


헷갈리는 문법들을 다시 한번 써볼생각이다.

switch문

switch문은 하나이상의 case문으로 구성됨 대게 default문도 있지만 필수는 아님

`switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}`
- 이 예시에서 변수 x의 값과 첫번째 case의 문값 value1을 일치 비교한뒤 두번째 case문의 값 value2와
  비교하는데 이걸 계속 반복한다.
- case문에서 변수 x의 값과 일치하는 값을 찾으면 아래의 코드가 실행한다. break문이나 switch 문이 끝나면 코드가 멈춘다.
- 값과 일치하는 case문이 없으면 default문 아래의 코드가 실행(있다는 전제하에)

