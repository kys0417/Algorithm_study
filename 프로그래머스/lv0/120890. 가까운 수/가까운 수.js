function solution(array, n) {
    array.push(n);
    array.sort((a,b) => a-b);
    const nIndex = array.indexOf(n);
    return array.length === nIndex + 1 ? array[nIndex-1] : Math.min(n-array[nIndex-1], array[nIndex+1]-n) === n-array[nIndex-1] ? array[nIndex-1] : array[nIndex+1];
}