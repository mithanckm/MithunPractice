async  function promises(q) {
    var promise1  = new  Promise(resolve => {
        resolve(q)
    })
    var promise2 = new  Promise(resolve => {
        resolve(q)
    })
    var promise3 = new  Promise(resolve => {
        if(2<1){
            resolve("Promise not Promise Rejected")
        }else {
            reject("Promise Rejected")
        }
    })
    await  Promise.all([promise1,promise2,promise3]).then(function (values) {
        console.log(values);
    }).catch(function () {
       console.log("Promise Rejected")
    })
}
promises(233333);

const  aa = 23;
console.log(aa);
const  a = 34;
console.log(aa);