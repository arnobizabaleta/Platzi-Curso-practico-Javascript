//Nuestros clientes están muy felices de poder calcular el precio final de sus productos después del descuento, 
//pero la tienda tiene una nueva solicitud para nosotros: implementar descuentos con cupones.

// Solución #1: arrays y switch
// Analicemos el problema y nuestra propuesta de solución:

//Crearemos un array con cada uno de nuestros cupones.
// Cambiaremos el input de descuento en HTML por un input de cupones.
// Usaremos un condicional switch para aplicar cierto porcentaje de descuento en nuestros productos 
//dependiendo del cupón que se haya elegido al presionar el botón del formulario.

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

    switch(couponValue) {
        case "amarillo":
        descuento = 15;
        break;
        case "verde":
        descuento = 30;
        break;
        case "rojo":
        descuento = 25;
        break;
  }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento); 
    

    const resultP  = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento ;

}