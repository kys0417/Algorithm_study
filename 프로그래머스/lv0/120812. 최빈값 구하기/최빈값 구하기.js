function solution(array) {
    let obj = new Map();
    for(let i of array) {
        obj.set(i, (obj.get(i) || 0) + 1);
        // array의 원소를 key, 빈도수를 value로 저장
        // obj는 처음에 비어있으므로 처음엔 value에 1로 저장됨
        // obj.get(n || 0) + 1의 의미는 obj에 있는 key 값이면 기존 value에 1 추가 없다면 1
    }
    obj = [...obj].sort((a,b) => b[1] - a[1]);
    return obj.length === 1 || obj[0][1] > obj[1][1] ? obj[0][0] : -1; 
    
}