let a = 10;
let b = 0;
let i;

for(i=0;i<a;i++){
    b = b + a + 2;
}

console.log(b);

newFunction();

function newFunction() {
    console.log(b+200);
}
