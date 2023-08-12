function solution(my_string) {
    let check = ["a","e","i","o","u"];
    return [...my_string].filter(v => !check.includes(v)).join("");
}