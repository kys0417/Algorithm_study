function solution(numbers) {
    const check = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    check.forEach((v,i) => numbers = numbers.replaceAll(v,i));
    return Number(numbers);
}