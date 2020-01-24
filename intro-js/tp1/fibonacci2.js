let val;

do {
    val = prompt("Entrez une valeur");
} while (isNaN(val));

let a = 0;
let b = 1;
console.log(b);

for (let i = 1; i <= val; ++i) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}