let val;

do {
    val = prompt("Entrez une valeur");
} while (isNaN(val) && parseInt(val) < 0);

for (let i = 1; i <= val; i++){
    if ((i % 15) === 0)
        console.log("FizzBuzz");
    else if ((i % 5) === 0)
        console.log("Buzz");
    else if ((i % 3) === 0)
        console.log("Fizz");
    else
        console.log(i);
}