

// // function x() {
// //        for (let i=0; i<=5; i++) {
// //         setTimeout( function () {
// //             console.log(i)
// //         }, i * 1000)
// //        }

// // }

// // x()

// function x() {
//    for (var i = 1 ;  i<=5 ; i++)
//     {

//           function close(x) {
//                setTimeout (function () {
//                 console.log(x);
//                }, x * 1000)
//           }
//     }

//     close(i);

// }

// x();

function x() {
    for (var i = 1; i <= 5; i++) {
        (function (x) { // IIFE to capture the current value of i
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        })(i); // Immediately invoke the function with the current value of i
    }
}

x();


function y() {
      for(var  i =1;  i<=5; i++) {
        (
            function (x) {
                 setTimeout( function () {
                    console.log(x)
                 }, x * 1000)
            }
        )(i);
      }
}

y();