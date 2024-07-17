// function isPalindrome(str) {

//     str = str.toLowerCase().replace(/[^a-z0-9]/g,'')

//     let reverse = str.split('').reverse().join('')
//     console.log(str, reverse)


//     if (str  === reverse){
//         return " Its Palindrome"
//     } else {
//         return "Its not a  Palindorme"
//     }


    
// }

// console.log(isPalindrome("Ajjayya"))


function isPalindrome(num) {
    const str  =  num.toString();

    const reversdnum  = str.split('').reverse().join('');

    return reversdnum === str;
}

console.log(isPalindrome(121))