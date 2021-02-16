var obj = [
    {
    "Name":"MithunKuamr",
    "age":23,
    "village":"chattanahalli"
    }
]
for( var i=0; i<obj.length;i++){
    var array = obj[i];
    console.log(array);
    for (var loop in array){
        var objectloop =  array[loop]
        console.log(objectloop);
    }
}
var arraytoobj={
    detail:[333,345,90],
    place:["Mithun","Kumar"]

}
for(var a in arraytoobj){
    var object =  arraytoobj[a];
    console.log(object);
    for(var i=0; i<object.length; i++){
        var finalarray = object[i];
        console.log(finalarray);
    }
}