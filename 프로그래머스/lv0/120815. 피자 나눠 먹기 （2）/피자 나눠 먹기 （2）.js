function solution(n) {
    const gcdF = (a, b) => a % b === 0 ? b : gcdF(b, a % b);
    const lcmF = (a, b) => a * b / gcdF(a, b);
    const lcm = lcmF(n, 6);
    return lcm / 6;
}