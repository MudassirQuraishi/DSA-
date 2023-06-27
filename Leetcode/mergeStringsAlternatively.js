var mergeAlternately = function(word1, word2) {
    const s1 = word1.split('');
    const s2 = word2.split('');
    const ans =[];
    var i =0;
    var j= 0;
    while(i<s1.length || j<s2.length){
        if(i<s1.length){
            ans.push(s1[i]);
            i++;
        }
        if(j<s2.length){
            ans.push(s2[j]);
            j++;
        }
    }
    return ans.join('');
};