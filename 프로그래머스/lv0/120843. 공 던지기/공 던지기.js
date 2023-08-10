function solution(numbers, k) {
    let answer = 0;
    for(let i = 0; i<k*2; i+=2) {
        if(i > numbers.length) numbers.map(v => numbers.push(v));
        answer = numbers[i];
    }
    return answer;
}