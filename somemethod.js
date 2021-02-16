function check(age){
    return age == 10;
}
var value = [10,34,44];
var aa = value.some(check);
console.log(aa);
function  add(a,b){
    return a+b;

}
var  g =[23,34,455];
var aa = g.reduce(add);
console.log(aa);

var aa = [3,4444,444,4];

aa.forEach(function (data) {
    console.log(data);
})

var aa1 = ["A","dad","daDA"]
var final = aa1.reduceRight(add);
console.log(final);

function checkdata(value) {
    return value >10;
}
var myArray = [4,5,5,6,10,3,];
console.log(myArray.some(checkdata));
