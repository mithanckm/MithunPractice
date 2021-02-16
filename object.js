var mithun = {
    age:23,
    fullName:function(){
        return "MithuKumar";
    }
}
console.log(mithun.fullName())
console.log(mithun.age);

var map = new  Map();
map.set('Mithun',34);
console.log(map);
//Array object
var a = new  Array();
console.log(a.length)

var a = new Array(1,2,3,3,3);
console.log(a);

var aaa = ["e123423",null,"adadadad","adadad"];
for( var i  = 0; i<aaa.length; i++)
{
    if(aaa[i] == null)
    {
        console.log(i);
    }
}

var array = [1,2,,4];
var obj = {}
console.log(Array.isArray());
console.log(Array.isArray(array));
console.log(Array.isArray(obj));
var aaa = [2,3,null,true]
console.log(aaa);
