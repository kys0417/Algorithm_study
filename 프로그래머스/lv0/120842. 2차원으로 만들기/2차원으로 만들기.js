function solution(num_list, n) {
    let answer = [];
    for(let j = n-1; j<num_list.length; j+=n) {
        answer.push(num_list.filter((_,i) => i <= j && i > j-n));
    }
    return answer;
}