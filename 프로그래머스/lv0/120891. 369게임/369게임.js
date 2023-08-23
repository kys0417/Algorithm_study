function solution(order) {
    let answer = 0;
    order = String(order).split('');
    order.forEach(v => v === "3" ? answer++ : v === "6" ? answer++ : v === "9" ? answer ++ : v)
    return answer;
}