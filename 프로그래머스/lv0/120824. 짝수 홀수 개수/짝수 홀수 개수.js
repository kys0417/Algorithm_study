function solution(num_list) {
    let answer = [];
    answer.push(num_list.filter(x => x%2 === 0).length);
    answer.push(num_list.filter(x => x%2 === 1).length);
    return answer;
}