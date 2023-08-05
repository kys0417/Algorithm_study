function solution(money) {
    // let answer = [];
    // const coffee = ~~(money / 5500);
    // while(money >= 5500) {
    //     money = ~~(money % 5500);
    // }
    // answer.push(coffee);
    // answer.push(money);
    // return answer;
    return [~~(money/5500), ~~(money%5500)];
}