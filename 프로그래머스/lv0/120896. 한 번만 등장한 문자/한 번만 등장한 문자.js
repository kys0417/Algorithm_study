function solution(s) {
    let answer = [];
    s = s.split("");
    s.forEach(v => {
        if(s.indexOf(v) === s.lastIndexOf(v)) answer.push(v);
    })
    return answer.sort().join("");
}