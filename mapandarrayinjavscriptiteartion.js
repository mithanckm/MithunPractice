var data =1;
for(var i=1; i<=5; i++){
     data =  data *i;
     console.log(data);
}

var str ="Mithun"
console.log(str.padEnd(11,"Kumar"))
function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

var aaa =[2,3,3,3333];
var aaaaa = reverseArray(aaa);
console.log(aaaaa)

function a(aa){
    return aa ==12;
}
var aaa =[12,34];
console.log(aaa.some(a))

var mystr = "MegrontechPVT"
var map  =  new Map();
var lower = 0;
var upper = 0;
for(var i =0; i<= mystr.length; i++){
    var data = mystr.charAt(i);
    if(data.toLocaleLowerCase() == data){
        lower ++;

    }
    else {
        upper ++;
    }
}
map.set("Lower",lower);
map.set("Upper",upper);
console.log(map);
for(var data2  of map){
    console.log(map[data2]);
}