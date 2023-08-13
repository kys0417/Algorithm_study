function solution(my_string) {
    return [...my_string].filter(v => !Number.isNaN(v/1)).map(Number).reduce((a,b) => a+b,0);
}