function solution(price) {
    if(price >= 100000 && price < 300000) return ~~(price - (price * 5/100));
    else if(price >= 300000 && price < 500000) return ~~(price - (price * 10/100));
    else if(price >= 500000) return ~~(price - (price * 20/100));
    else return price;
}