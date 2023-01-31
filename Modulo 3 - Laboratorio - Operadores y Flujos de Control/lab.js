const product = { count: 3, price: 12.78, type: "cartas magic"};

let total;
if (product.count > 0){
    total = product.count * product.price
}
else {
    total = 0 
};

console.log(total);

let tipoiva;

switch(product.type){
    case "ocio":
    tipoiva = 0.15; break;
    case "libros":
        tipoiva = 0.10; break
        default: tipoiva = 0.21;

}

console.log(tipoiva);
const iva = total*tipoiva;
console.log(iva);
console.log(total + iva);