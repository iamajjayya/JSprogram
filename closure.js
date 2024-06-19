// function outer (b) {
//         let l = 10;

//         function inner () {
//              console.log(l,b)
//         }

//         return inner();

        
// }

// outer("hello");

function  Counter () {
    var count  = 0 ;

    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        
        count--;
        console.log(count)
    }

    

}
var c1 =  new Counter();
c1.incrementCounter();
c1.incrementCounter();
c1.decrementCounter();
