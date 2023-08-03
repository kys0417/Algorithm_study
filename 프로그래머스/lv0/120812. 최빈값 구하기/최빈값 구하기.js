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
    // obj의 length === 1인 경우 value값 출력 = obj[0][0]
    // length가 1이 아닌 경우 오름차순 정렬한 obj의 value값 [0], [1] 비교
    // [0]의 value가 [1]의 value가 크면 빈도수가 다르게 있다는 뜻이므로 [0]의 value값 출력
    // 아닌 경우 최빈값이 여러개라는 뜻이므로 -1출력
}