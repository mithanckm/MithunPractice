function getmax(inputarray){
    var max = inputarray[0];
    for(var i =0; i<inputarray.length; i++){
        if(inputarray[i]> max){
            max = inputarray[i];
        }
    }
    return max;
}

var aaa= [457,5,5,56];
var maxvalue = getmax(aaa);
console.log(maxvalue);
