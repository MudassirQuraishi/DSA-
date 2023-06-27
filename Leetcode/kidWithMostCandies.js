var kidsWithCandies = function(candies, extraCandies) {
    let length = candies.length;
    var max = 0;
    for(let i =0;i<length;i++){
        if(candies[i]>max){
            max = candies[i];
        }
    }
    let result =[];
    for(let i =0;i<length;i++){
        result.push((candies[i]+extraCandies)>=max); 
    }
    return result;
    
};