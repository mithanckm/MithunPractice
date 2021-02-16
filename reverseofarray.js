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

