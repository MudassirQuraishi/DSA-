function rowWithMax1s(arr, n, m){
    let row_count =0;
    let line =0;
    for(let i =0;i<arr.length;i++){
        let line_count =0;
        for(let j =0;j<arr[i].length;j++){
            if(arr[i][j]==1){
                line_count++;
            }
        }
        if(line_count>row_count){
            row_count=line_count;
            line = i;
        }
    }
    return line;
}
let arr = [[1,1,1,1][0,0,1,1][1,0,1,1]];
let n = arr.length;
let m = arr[0].length;
let answer = rowWithMax1s(arr,n,m);
console.log(answer)