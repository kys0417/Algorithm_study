function solution(hp) {
    let a = hp / 5;
    let b = (hp % 5) / 3;
    let c = ((hp % 5) % 3) / 1;
    return ~~a + ~~b + ~~c;
}