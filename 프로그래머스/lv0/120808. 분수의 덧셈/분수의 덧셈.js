function solution(numer1, denom1, numer2, denom2) {
    const gcdF = (a, b) => a % b === 0 ? b : gcdF(b, a % b);
    const newDenom = denom1 * denom2;
    const newNumer = (numer1 * denom2) + (numer2 * denom1);
    const gcd = gcdF(newDenom, newNumer);
    return [(newNumer / gcd), (newDenom / gcd)];
}