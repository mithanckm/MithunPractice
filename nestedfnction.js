function add(){
   this.name = function () {

        return "MithunKumar"
    }
}

var a = new  add();
console.log(a.name());


function arry(){
    this.name = [];
}

var arraay = new  arry();
arraay.name.push(23);
console.log(arraay.name);