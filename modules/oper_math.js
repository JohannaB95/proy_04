const Math = {}; 

function suma(resultado1,resultado2) {
    return resultado1 + resultado2;
}

function resta(resultado1,resultado2) {
    return resultado1 - resultado2;
}

function multiplicacion(resultado1,resultado2) {
    return resultado1 * resultado2;
}

function division(resultado1,resultado2) {
    if (resultado2 == 0 && resultado1 == 0) {
        return "N/A"
    } else if (resultado2 == 0) { 
        return "N/A"
    }
        return resultado1 / resultado2;
}

Math.suma = suma;
Math.resta = resta;
Math.multiplicacion = multiplicacion;
Math.division = division;

module.exports = Math
