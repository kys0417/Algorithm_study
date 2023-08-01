function solution(s1, s2) {
    let i = 0;
    let answer = 0;
    for(; i<s1.length; i++) {
        if(s2.includes(s1[i]))
            answer+= 1;
    }
    return answer;
}