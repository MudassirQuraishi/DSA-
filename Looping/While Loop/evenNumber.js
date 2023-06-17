//Write a program using only while loops to print all the even numbers from 1 to n

function even(n){
    let arr=[]
    let i =1;
    while(i<=n){
        if(i%2==0){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(even(10));