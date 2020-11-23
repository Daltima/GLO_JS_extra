let num = 266219;

let mult = 1;
while (num > 0) {
    let cyfra = num % 10;
    mult *= cyfra;
    num = Math.floor(num / 10);
}
console.log(mult);

let degree = mult**3;

let str = degree + "";
let first2 = str[0] + str[1];

let first = document.querySelector("#first");
first.innerText = first2;


