function areAnagrams(str1,str2) {

    const cleanstring = (str) => str.replace(/[^\w]/g,'').toLowerCase();
    
    str1 = cleanstring(str1);
    str2 =cleanstring(str2);

    if(str1.length !== str2.length) {
        console.log("its  not an Anagram");
        return false;
    }

    const charcount1 = {};
    const charcount2 = {};

    for (let char of  str1) {
        charcount1[char] = (charcount1[char] || 0) + 1;
    }

    for (let char of str2) {
        charcount2[char] = (charcount2[char] || 0  ) + 1;
    }

    for ( let char of  str1) {
        if(
        charcount1[char] !==  charcount2[char]) {
            return false;
        }
    }


    return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello","world" ))
