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

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("input1Triangulo");
    const value1 = Number (input1.value);
    

    const input2 = document.getElementById("input2Triangulo");
    const value2 =  Number (input2.value);
    console.log(value2 +  " " + typeof(value2));
    
    const input3 = document.getElementById("input3Triangulo");
    const value3 = Number(input3.value);
    //console.log(value3 +  " " + typeof(value3)); validando tipo de dato de entrada

    const perimetro = perimetroTriangulo(value1,value2,value3);
    console.log(perimetro);
    alert(perimetro);
}


function calcularAreaTriangulo () {
    const input1 = document.getElementById("input1Triangulo");
    const value1 = Number (input1.value);
    

    const input2 = document.getElementById("input2Triangulo");
    const value2 =  Number (input2.value);
    console.log(value2 +  " " + typeof(value2));
    
    const input3 = document.getElementById("input3Triangulo");
    const value3 = Number(input3.value);

    if (value1 != value2) {
        console.error("Los lados a y b no son iguales. Recuerda es un triángulo ISÓSCELES!");
        alert("Los lados a y b no son iguales. Recuerda es un triángulo ISÓSCELES!")
    } else {
      //Calculo altura asumiendo que es un triángulo iscoseles  RAIZ (L1**2 - (B/2)**2 )

        const h = Math.sqrt( (value1**2) - ((value3/2)**2 ));


        //área
        const area = areaTriangulo(value3, h);
        console.log(area);
        alert(area);
        
    }

    
}

function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    console.log(perimetro);
    alert(perimetro);
}

function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    console.log(area);
    alert(area);
}
