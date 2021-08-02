// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4 ;
} 

//console.log("El permitero del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
} 

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2") ;

console.groupEnd();

//Código del triangulo
console.group("Triángulos");

/*const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
"Los lados del triangulo miden: " 
+ lado1Triangulo 
+ "cm, " 
+ lado2Triangulo 
+ "cm, " 
+ baseTriangulo + "cm"
);

console.log("la altura del truangulo es: " + alturaTriangulo + "cm");

*/
function perimetroTriangulo(lado1, lado2,  base) {
    return lado1 + lado2 + base ;
} 
//console.log("El permitero del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura)/ 2;
}

//console.log("El área del triangulo es: " + areaTriangulo + "cm^2") ;

console.groupEnd();

//Código del circulo 
console.group("Círculo");

//const radioCirculo = 4; 
//const diametroCirculo = radioCirculo*2;
function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;  // Circunferencia 
}; 


function areaCirculo (radio) {
    return  (radio * radio) * PI;
}

/*console.log("El radio del círculo es: " + radioCirculo+ "cm");
console.log("El diametro del círculo es: " + diametroCirculo+ "cm");
console.log("El perimetro del círculo es: " + perimetroCirculo+ "cm");
console.log("PI es: " + PI);
console.log("El area del círculo es: " + areaCirculo+ "cm");
*/
console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
