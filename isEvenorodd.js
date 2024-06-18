// function isEven () {
//     let  num = 11;
    
//     if(num % 2 === 0) {
//         console.log("Even")
//     } else {

//         console.log("Odd")
//     }
// }

// isEven();

function  isEven(num) {
     let evenNumber =  [];

     for (let i= 0; i<=num.length; i++) {
        if(num[i] % 2 == 0){
            evenNumber.push(num[i]);
            
        }


     }
     return evenNumber
}

let  numbers  = [1,2,3,4 ,5,6,7,8,9,10,11,12]
console.log("Even numbers in an Array " + isEven(numbers).join(","))