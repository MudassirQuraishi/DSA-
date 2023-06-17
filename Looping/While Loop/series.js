//Print the following series using while loop
// 1 4 9 16 25 36 …. n

function series(n){
    let i = 1;
    let j = 3;
    let arr=[];
    while(i<=n){
      arr.push(i);
      i = i+j;
      j+=2;
    }
    return arr;
  }
  console.log(series(49));