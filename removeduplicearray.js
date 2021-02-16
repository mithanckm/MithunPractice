var aa = [45,55,55,6,5,5]
var unique = [];
for(var i=0; i<aa.length;i++){
    if(unique.indexOf(aa[i])== -1){
        unique.push(aa[i])
    }

}
console.log(unique);