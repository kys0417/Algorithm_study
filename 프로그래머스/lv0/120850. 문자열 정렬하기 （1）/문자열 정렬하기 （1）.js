function solution(my_string) {
    return [...my_string].filter(v => !Number.isNaN(v/1)).sort((a,b) => a-b).map(v => parseInt(v));
}