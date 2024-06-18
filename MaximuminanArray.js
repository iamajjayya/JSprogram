// const Arr =  [10,30,40,50]

// const Max =  Math.max(...Arr)

// console.log(Max)

const Arr = [10,20,30,40,50,100]

let max = Arr[0]

for(let i = 0 ; i <=Arr.length;i++) {
    if(Arr[i] > max) {
        max = Arr[i]
    }
}

console.log("The  Maximum number is " + max)