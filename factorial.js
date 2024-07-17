// function  fatorial(n) {
//     if (  n < 0 ) {
//         return undefined;
//     }

//     let  result  = 1;
//     for (  let  i  = 2 ;  i <= n ; i++) {
//         result  = result *  i
//     }

//     return  result;
//  }

//  console.log(fatorial(5))

function factorial(n) {

     if  (n == 0 || n== 1) {
        return  1
     }
      else 
      
       return  n *  factorial(n- 1)
         
}

console.log(factorial(5))