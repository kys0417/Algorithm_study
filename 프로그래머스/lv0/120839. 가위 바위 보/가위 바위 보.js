function solution(rsp) {
    // 풀이 1
    // let answer = []
    // let rspArr = [...rsp]
    // for(let i in rspArr){
    //     if(rspArr[i] === "2") rspArr[i] = "0";
    //     else if(rspArr[i] === "0") rspArr[i] = "5";
    //     else if(rspArr[i] === "5") rspArr[i] = "2";
    //     answer.push(rspArr[i]);
    // }
    // return rspArr.join("");
    return [...rsp].map(v => v === "2" ? "0" : (v === "0" ? "5" : "2")).join("");
}