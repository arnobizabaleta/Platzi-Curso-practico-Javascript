/* Solución #2: legibilidad, error first y muerte al switch
Legibilidad es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. 
Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.

Además, error-first es un patrón de programación donde atrapamos los errores antes de escribir 
el resto de la lógica de nuestros programas. 
Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código. 

Error first con array.includes
La función array.includes() nos permite validar si un elemento ha sido almacenado en el array. 
Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado 
    en el array coupons)
*/

// el HTML descuentoCupones también funciona para esta solución

const coupons = [
    "amarillo",
    "verde",
    "rojo",
];

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice  = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    
    if (!coupons.includes(couponValue)) { // Si el cupón que digito el usuario no está guardado en el array coupon
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "amarillo") {
        descuento = 15;
     } else if (couponValue === "verde") {
        descuento = 30;
     } else if (couponValue === "rojo") {
        descuento = 25;
     }
   

    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento); 
    

    const resultP  = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento ;

}