function* Generator(){

    yield 8;
    yield 9;
    return 90;
}



var generate  = Generator();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
