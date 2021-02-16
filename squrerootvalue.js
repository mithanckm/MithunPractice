var array  = [2,34,4,4,4,4,4,6,23];

for(var i=0; i<array.length; i++){
    if(array[i]%2== 0){
        console.log(array[i] +"value even")
    }
    else {
        console.log(array[i]+"value is odd number");

    }
}
var map = new  Map();

for(var i=1;i<10;i++){
    map.set(i,i*i);
}
console.log(map);

map.forEach(function (element) {
    console.log(element);
})

var a=9;
var b=10;

var a=a+b;
var b=a-b;
var a= a-b;
console.log(a  +"a Value");
console.log(b+"b Value");