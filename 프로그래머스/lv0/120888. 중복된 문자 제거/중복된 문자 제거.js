function solution(my_string) {
    let newSet = new Set(my_string);
    return [...newSet].join("");
}
