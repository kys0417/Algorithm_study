function solution(my_string) {
    return [...my_string].reverse().toString().replaceAll(",","");
}