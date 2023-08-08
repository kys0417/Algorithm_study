function solution(rsp) {
    let answer = []
    let rspArr = [...rsp]
    for(let i in rspArr){
        if(rspArr[i] === "2") rspArr[i] = "0";
        else if(rspArr[i] === "0") rspArr[i] = "5";
        else if(rspArr[i] === "5") rspArr[i] = "2";
        answer.push(rspArr[i]);
    }
    return rspArr.join("");
}