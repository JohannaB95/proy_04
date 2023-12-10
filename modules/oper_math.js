//Se declara un objeto vacío llamado Math. Este objeto se utiliza para agrupar funciones relacionadas con operaciones matemáticas.
const Math = {};

//Se declara una función llamada suma que tiene dos parámetros resultado1 y resultado2
function suma(resultado1,resultado2) {
    //Se retorna el resultado de la suma entre resultado1 y resultado2
    return resultado1 + resultado2;
}

//Se declara una función llamada resta que tiene dos parámetros resultado1 y resultado2
function resta(resultado1,resultado2) {
    //Se retorna el resultado de la resta entre resultado1 y resultado2
    return resultado1 - resultado2;
}

//Se declara una función llamada multiplicacion que tiene dos parámetros resultado1 y resultado2
function multiplicacion(resultado1,resultado2) {
    //Se retorna el resultado de la multiplicación entre resultado1 y resultado2
    return resultado1 * resultado2;
}

//Se declara una función llamada división que tiene dos parámetros resultado1 y resultado2
function division(resultado1,resultado2) {
    //Se utiliza if para verificar si resultado2 es igual a 0 y si resultado1 es igual a 0
    if (resultado2 == 0 && resultado1 == 0) {
        //Si la condición se cumple, se retornara un mensaje de no aplica
        return "N/A"
    //Se evalua si resultado2 es igual a cero
    } else if (resultado2 == 0) { 
        //Si la condición se cumple, se retornara un mensaje de no aplica
        return "N/A"
    }
        //Se retorna el resultado de la división entre resultado1 y resultado2
        return resultado1 / resultado2;
}

/*Se asignan las funciones suma, resta, multiplicacion, y division como propiedades del objeto Math. Esto crea 
métodos asociados con el objeto Math.*/
Math.suma = suma;
Math.resta = resta;
Math.multiplicacion = multiplicacion;
Math.division = division;

//Se exporta el objeto Math para que pueda ser utilizado en otros archivos. Esto se logra usando module.exports.
module.exports = Math;
