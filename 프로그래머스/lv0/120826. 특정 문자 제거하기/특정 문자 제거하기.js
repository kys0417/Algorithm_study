function solution(my_string, letter) {
    return [...my_string].filter(answer => answer !== letter).join("");
}