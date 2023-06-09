const arr = [1,2,1];
function concatenation(arr){
    const ans = [];
    const n = arr.length;
    for(let i=0; i<arr.length;i++){
        ans[i]=arr[i];
        ans[i+n] = arr[i];
    }
    return ans;
}
console.log(concatenation(arr))