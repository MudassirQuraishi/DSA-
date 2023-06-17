//Write a program to print the largest number of the three numbers given
function largestAmongTwo(a,b,c){
    if(a>b && a>c) return a;
    else if(b>a && b>c) return b;
    else return c;
}
var largest = largestAmongTwo(4,191,100);
console.log(largest);