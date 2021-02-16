var data = [1,2,3,4,5,6];
console.log(data.slice(3));
console.log(data.slice(0,3));
console.log(data.slice(1,-1));
// syntax arr.slice(from,end);
//In slice remove if give first argument it return remain element from array
// if pass the from and end both it will return the deleted element from array

//Splice
//used for the add and remove the elements
console.log(data.splice(1,1,8,7));
console.log(data);


