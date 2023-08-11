function solution(numbers) {
    let answer = [];
    numbers.map(v => {
        for(i of numbers) {
          if(numbers.length !== 0 && v !== i) answer.push(v*i);
            else answer.push(v);
        } 
    });
    return Math.max(...answer);
}