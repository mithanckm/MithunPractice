var p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};

for (var key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}

var  str ="MithunKumar";
var Str="";
for(var i=str.length-1; i>=0; i--){
    Str =Str+str.charAt(i);
}
console.log(Str)