require('colors');

const math = require('./modules/oper_math.js');

let resultado1 = numeroAleatorio1();

function numeroAleatorio1() {
  return Math.floor(Math.random()*10);
}

let resultado2 = numeroAleatorio2();

function numeroAleatorio2() {
    return (Math.floor(Math.random()*10));
}

console.clear( );

console.log(math);

const main = async( ) => {

    console.log('****************************************'.blue);
    console.log('*       '.blue,'Operaciones Matemáticas'.bgGreen, '      *'.blue);
    console.log('****************************************\n'.blue);
    
    console.log('****************************************'.grey);
    console.log('*                                      *'.grey)
    console.log('*      '.grey, 'Números generados'.bgBlue, resultado1 + " " + 'y'.grey, resultado2 + '        *'.grey);
    console.log('*                                      *'.grey);
    console.log('*          '.grey,  'Suma'.red, (resultado1 + " "+ "+"  + " "+ resultado2),  "=" + " " + (math.suma(resultado1,resultado2)), '           *'.grey);
    console.log('*                                      *'.grey);
    console.log('*         '.grey,  'Resta'.red, (resultado1 + " "+ "-"  + " "+ resultado2),  "=" + " " + (math.resta(resultado1, resultado2)), '           *'.grey);
    console.log('*                                      *'.grey);
    console.log('*     '.grey,  'Multiplicación'.red, (resultado1 + " "+ "*"  + " "+ resultado2),  "=" + " " + (math.multiplicacion(resultado1, resultado2)), '      *'.grey);
    console.log('*                                      *'.grey);
    console.log('*'.grey,  'División'.red, (resultado1 + " "+ "/"  + " "+ resultado2),  "=" + " " + (math.division(resultado1, resultado2)), '*'.grey);
    console.log('*                                      *'.grey);
    console.log('****************************************'.grey);
}

main();
