//Write a program to print the digits of a number
function print(n){
    let arr =[]
      while(n>0){
          arr.push(Math.floor(n%10));
          n=Math.floor(n/10);
      }
      return arr;
  }
  console.log(print(123));