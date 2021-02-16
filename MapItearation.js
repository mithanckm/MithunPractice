var map =  new  Map();

map.set("MithunKumar",9844043467);
map.set("KumarappaCk",8456465654);
map.set("dqeqeqe",7777777777);
for(var name of  map.keys()){
    console.log(name);
}
for(var phone  of map.values()){
    console.log(phone);
}

var map2 = new  Map();
var name1 = {name:"Mithun"};
var name2 = {name2:"jkkk"};
var name3 = {nam3:"Kumar"};
map2.set(name1,name3);
map2.set(name2,name3);
for(var ddd of map2.entries()){
    console.log(ddd);
}
var array =[444,455,56,545];
var max = array[0];
for (var i=0; i<array.length;i++){
    if(array[i]>max){
        max= array[i];
    }

}
console.log(max);
