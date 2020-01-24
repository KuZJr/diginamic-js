let a = 0;
let b = 1;
console.log(b);

for (let i = 1; i <= 10; ++i) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}