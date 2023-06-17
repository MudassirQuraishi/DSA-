//Write a program to print the largest number of the two numbers given
function largestAmongTwo(a,b){
    if(a>b) return a;
    else return b;
}
var largest = largestAmongTwo(4,191);
console.log(largest);