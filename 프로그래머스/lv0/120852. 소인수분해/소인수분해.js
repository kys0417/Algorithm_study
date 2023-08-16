function solution(n) {
    let answer = [];
    let sosu = 2;
    while(n >= 2) {
        if(n%sosu === 0) {
            answer.push(sosu);
            n = n/sosu;
        }
        else sosu++;
    }
    return [...new Set(answer)];
}