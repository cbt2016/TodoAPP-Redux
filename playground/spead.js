function Add(a,b){
  return a +b;
}

var sum = [9,5];
console.log(Add(...sum));

var groupA = ['lionnie','hans','albert'];
var groupB = ['jenny','nathalie'];

var final = [...groupA,'simo',...groupB];
console.log(final);
