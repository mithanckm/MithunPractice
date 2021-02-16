function data(name,age){
    this.name = name;
    this.age = age;
}

data.prototype.adre = "chikkamagalore";
var  vv  =  new  data(2,3);
console.log(vv.adre);

var a= "ddf";
var b ="dfdf";
var join = ""
for(var i=0; i<=a.length;i++){
    for(var j=i; j<=i ; j++){
       join = join +a[i] +b[j];
    }
}
console.log(join);
