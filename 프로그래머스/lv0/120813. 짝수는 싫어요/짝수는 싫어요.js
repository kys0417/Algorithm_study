function solution(n) {
    let i = 0;
    let answer = []
    for(; i<=n; i++) {
        if(i % 2 === 1)
            answer.push(i);
    }
    return answer;
}