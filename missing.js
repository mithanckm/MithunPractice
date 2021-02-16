var a = [1,2,4,5];
var miss = [];

for(var i=1; i<a.length;i++){
    if(a.indexOf(i) == -1){
        miss.push(i);
    }
}
console.log(miss);