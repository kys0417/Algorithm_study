const factorial = (num) => {
    let returnFactorial = BigInt(1);
    for(let i = BigInt(1); i<=num; i++){
        returnFactorial *= i; 
    }
    return returnFactorial;
}

function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}