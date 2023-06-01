function solution(n) {
  let answer = 0;
  let count = 0;
  let start = 1;
  let end = 1;
  let sum = 0;

  while (start <= n) {
    if (sum < n) {
      sum += end;
      end++;
    } else if (sum >= n) {
      if (sum === n) {
        count++;
      }
      sum -= start;
      start++;
    }
  }

  return count;
}
