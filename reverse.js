// // // // function  ReverseString (str) {

// // // //     return str.split('').reverse().join('');
// // // // }

// // // // console.log(ReverseString("helloo"));

// // // function ReverseString(str) {

// // //     let rversedStr = " ";
// // //     for(let i=str.length-1;i>=0;i--) {
// // //         rversedStr = rversedStr + str[i];
// // //     }

// // //     return rversedStr;
// // // }

// // // console.log(ReverseString("hello word!"))

// // function  reversdNumber(num) {
// //     let  reversdnum = 0;
// //     let  sign  =  Math.sign(num);
// //     num =  Math.abs(num);

// //     while (num > 0 ) {
// //         let  lastdigit  =  num  %  10;
// //         reversdnum = ( reversdnum * 10) + lastdigit;
// //         num  = Math.floor( num  /  10);
// //     }

// //     return  reversdnum * sign;
// // }


// // console.log(reversdNumber(123456));

// const array  =  [1 ,2,3,4,5,6,7];
// console.log(array.reverse(array))

function reversearray (arr) {

    let start  = 0;
    let end  = arr.length -1 ;

    while( start < end ) {

        let  temp  =  arr[start];
        arr[start] = arr[end];
        arr[end] =  temp;


        start ++;
        end --;
    }

    return arr;

}

const array = [ 5,4,3,2,1] 
console.log(reversearray(array))