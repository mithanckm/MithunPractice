function proToType(name){
    this.name= name;
}

proToType.prototype.Mithun = function () {
    console.log(23);
}
var data  = new  proToType("mithunKumar");
console.log(data.name);

