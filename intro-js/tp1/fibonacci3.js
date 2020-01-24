let val;
let ma_div = document.getElementById("fibo");

do {
    val = prompt("Entrez une valeur");
} while (isNaN(val));

let a = 0;
let b = 1;
let p1 = document.createElement("p");
p1.textContent = a;
ma_div.appendChild(p1);
let p2 = document.createElement("p");
p2.textContent = b;
ma_div.appendChild(p2);

for (let i = 1; i <= val; ++i) {
    let c = a + b;
    a = b;
    b = c;
    let p = document.createElement("p");
    p.textContent = c;
    ma_div.appendChild(p);
}