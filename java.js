var array = [1,4,6,8];
var map = new  Map();
for(var i=0; i<array.length; i++){
    var data  = array[i];
    var root  =  array[i]* array[i];
    map.set(data,root);

}
console.log(map);