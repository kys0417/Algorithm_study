function solution(age) {
    return age.toString().split("").map(v=> String.fromCharCode((parseInt(v) + 97).toString())).join("");
}