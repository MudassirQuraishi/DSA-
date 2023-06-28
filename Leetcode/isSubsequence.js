var isSubsequence = function(s, t) {
    var count =0;
    let prevIndex =0;
    for(let i =0;i<s.length;i){
        for(let j =prevIndex;j<t.length;j++){
            if(s.charAt(i)== t.charAt(j)){
                count++;
                prevIndex = j;
                prevIndex++;
                i++;
            }
        }
        i++;
    }
    if(count==s.length) return true;
    else return false;
};