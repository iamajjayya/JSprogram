function isPalindrome(str) {

    str = str.toLowerCase().replace(/[^a-z0-9]/g,'')

    let reverse = str.split('').reverse().join('')
    console.log(str, reverse)


    if (str  === reverse){
        return " Its Palindrome"
    } else {
        return "Its not a  Palindorme"
    }


    
}

console.log(isPalindrome("Ajjayya"))

