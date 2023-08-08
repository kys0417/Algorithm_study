function solution(letter) {
    let answer = []
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    const morseArr = Object.entries(morse);
    const letterArr = letter.split(" ");
    for(let i in letterArr) {
        for(let j in morseArr) {
            if(letterArr[i] === morseArr[j][0])
                answer.push(morseArr[j][1]);
        }
    }
    return answer.join("");
}