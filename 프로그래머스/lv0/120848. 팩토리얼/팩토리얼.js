const factorial = (num) => num === 0 ? 1 : num * factorial(num-1);
      
function solution(n) {
    let answer = 1;
    while(true) {
        if(factorial(answer) > n) return answer-1;
        else answer++;
    }
}