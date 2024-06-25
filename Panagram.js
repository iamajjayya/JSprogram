function isPanagram(sentense) {
    const alaphabet = 'abcdefghijklmnopqrstuvwxyz';

    const tolowercasesentence =sentense.toLocaleLowerCase();

    for(let char  of alaphabet) {
        if(!tolowercasesentence.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog"));
console.log(isPanagram(" Hello world"));
