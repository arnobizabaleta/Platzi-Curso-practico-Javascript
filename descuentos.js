//const precioOriginal = 120;
//const descuento = 18;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

 /*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento

}) */


function onClickButtonPriceDiscount() {
    const inputPrice  = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount  = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
   

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); 
    console.log ({
        priceValue,
        discountValue,
        precioConDescuento

    })

    const resultP  = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento ;

}

