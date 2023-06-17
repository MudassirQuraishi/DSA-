//By using while loop and continue statement
//Print all number from 1 to n but then it should not be divisible by 5
function mutliples(n){
    let i =1;
    let arr=[];
    while(i<=n){
        if(i%5!=0){
          arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(mutliples(5));
