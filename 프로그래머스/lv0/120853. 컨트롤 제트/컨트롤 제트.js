function solution(s) {
    s = s.split(" ");
    let checkIndex = s.map((v,i) => {
        if(v==="Z") return s[i-1];
    }).filter(element => element);
    
    
    return s.filter(v => v!=="Z").reduce((a,b) => Number(a) + Number(b),0) - checkIndex.reduce((a,b) => Number(a)+Number(b),0);
}