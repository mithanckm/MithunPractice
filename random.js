var  aa = [2,1,5,5];
var aaa = [];
for(var i=1; i<=5; i++)
{
    if(aa.indexOf(i) == -1){
        aaa.push(i);
    }
}
console.log(aaa);