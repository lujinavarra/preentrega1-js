/*Este es un simulador para el cálculo de la ecuación de Friedewald. Esta ecucación sirve para calcular el colesterol malo o hdl, en base al conocimiento de los valores de colesterol total, triglicéridos y colesterol bueno o hdl. Generalmente es una herramienta que utilizan los médicos, pero cualquier persona que se haya hecho estos análisis y no se hizo el colesterol malo, lo puede obtener. Se necesita haberse realizado un análisis de sangre, para tener los valores a ingresar.
Declaración de funciones */
//Función para calcular el colesterol malo en base a los otro parámetros
function ecuacionDeFriedewald (colesterolTotal, hdl, trigliceridos){
    let ldlCalculado = colesterolTotal - hdl - (trigliceridos/5);
    return ldlCalculado;
}
//función para que el dato que ingrese el usuario sea el adecuado para calcular el valor
function validarDatos (numero){
    if (numero > 1  && !isNaN(numero)) {        
        return true;
    }
    else{
        return false
    }
}

// Función para evaluar el resultado y devolver una valoración
function mostrarResultadoValoracion (ldl) {
    alert ("Tu valor de ldl es de " + ldl);
    if (ldl < 70 ) {
    alert ("Tus valores de ldl están óptimos. Sigue así!!!");
}
    else if (ldl >= 70 && ldl < 130) {
    alert ("Tus valores de ldl están normales. Puedes chequearte el año próximo.");
}
    else if (ldl >= 130 && ldl <= 160){
    alert ("Tus valores de ldl están levemente excedidos de lo normal. Agenda un turno con un profesional para controlarte periódicamente.");
}
    else if (ldl > 160) {
    alert ("Tus valores de ldl están extremadamente altos. Consulta urgente con un profesional!!!");
}
}

//ciclo para pedir los datos al usuario
alert("Buenas, te voy a ayudar a calcular tus niveles de colesterol malo, y así poder chequear tu salud!!");
let nombre = prompt("Ingresa tu nombre");

while(nombre!="salir"){
    let colesterolTotal = parseInt(prompt("Ingresá tu valor de colesterol total"));
    let colesterolTotalValidado = validarDatos(colesterolTotal);
    let hdl = parseInt(prompt("Ingresá tu valor de hdl"));
    let hdlValidado= validarDatos(hdl);
    let trigliceridos = parseInt(prompt("Ingresá tu valor de triglicéridos"));
    let trigliceridosValidado = validarDatos(trigliceridos);
    if (colesterolTotalValidado && hdlValidado && trigliceridosValidado){
        let ldl = ecuacionDeFriedewald(colesterolTotal, hdl, trigliceridos);
        mostrarResultadoValoracion(ldl);
        nombre = prompt("Si ya terminó su valoración ingrese salir. De lo contrario ingrese su nombre");} 
    else {
        alert ("Alguno de tus datos son incorrectos. Por favor revisalos")
    }
}
