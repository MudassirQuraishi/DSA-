//Write a program to assume a value of marks 
//and print whether a person has failed or passed using ternary Operator.
function check (a){
    var result = (a<=40) ? "Pass" : "Fail";
    return result;
}
var marks = 40;
console.log(check(marks));