function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.

/* Array de cupones 2.0: ahora también con los descuentos
Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, 
pero en otro lugar distinto definimos el descuento de cada cupón.
Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos 
(con el nombre y descuento de cada cupón en el mismo lugar): 

*/

const coupons = [
    {
        name: "amarillo",
        discount: 15,
    },
    {
        name: "verde",
        discount: 30,
    },
    {
        name: "rojo",
        discount: 25,
    },
];

// Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla por la función array.find() 
//para validar si el cupón que escribió el usuario está guardado 
//en la propiedad name de alguno de los objetos en la lista de cupones.

/* Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro 
coupon es igual a nuestra variable userCouponValue.
 Y esta variable la vamos a enviar como parámetro a nuestra función array.find(). */

 
 function onClickButtonPriceDiscount() {
    const inputPrice  = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
   
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    /*Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) 
    disponible en la nueva variable userCoupon */

    /*Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if
     y cambiarlos por un condicional else que nos proporcione    el porcentaje de descuento automáticamente,
      sin importar el cupón (válido) que estén usando nuestros usuarios. */
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
 
    
       
  

}
 
 // También sirve el mismo archivo HTML descuentoCupones.html 
 
 
