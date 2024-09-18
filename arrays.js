arr=[1,2,3,4,5,6];
console.log(arr);

arr.push(30);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);//add at first/starting
console.log(arr);

arr.shift();
console.log(arr);
arr.shift()//removes from starting
console.log(arr);
// Check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

checkEvenOdd(10); // Output: 10 is even
checkEvenOdd(7); // Output: 7 is odd

