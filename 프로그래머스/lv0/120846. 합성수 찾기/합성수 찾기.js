function solution(n) {
    let answer = 0;
    let checkArr = [];
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++){
            if(i%j === 0) checkArr.push(j);
        }
        if(checkArr.length >= 3) answer++;
        checkArr = [];
    }
    return answer;
}