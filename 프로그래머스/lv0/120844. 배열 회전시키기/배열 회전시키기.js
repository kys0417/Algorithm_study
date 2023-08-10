function solution(numbers, direction) {
    if(direction === "left") {
        const first_num = numbers.shift();
        numbers.push(first_num);
    } else {
        const last_num = numbers.pop();
        numbers.unshift(last_num);
    }
    return numbers;
}