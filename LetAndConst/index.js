// function iterateVar() {
// for(var i = 0; i < 10; i++) {
// console.log(i);
// }
// console.log(i);
// }
// var is globally accessed, let is a local variable so not accessible globally
// function iterateLet() {
// for(let i = 0; i < 10; i++) {
// console.log(i);
// }
// console.log(i);
// }

// iterateVar();
// iterateLet();

function reinitConst(){
    const me = 1;
    console.log(me);
    me = 2;
    console.log(me);
    }
    
    reinitConst();

function countToTen(){
    for(let n =0; n<11; n++){
        console.log(n);
    }
}
countToTen();