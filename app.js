//Se carga la libreria colors para permitir el uso de estilos de colores en la terminal
require('colors');

//Se carga el código que contiene el archivo oper_math.js que se encuentra en la carpeta modules.
const math = require('./modules/oper_math.js');

//Se declara una variabale llamada resultado1 que almacenara el número aleatorio obtenido en la función numeroAleatorio1()
let resultado1 = numeroAleatorio1();

//Se declara una función llamada numeroAleatorio1 sin parámetros
function numeroAleatorio1() {
  /*Se retornara un número aleatorio que se encuentre entre 1 y 9.
  Se utiliza Math.floor para redondear un número hacia el entero anterior.
  Se utiliza Math.random para obtener un número decimal aleatorio en el rango [0, 9]*/
  return Math.floor(Math.random()*10);
}

//Se declara una variabale llamada resultado2 que almacenara el número aleatorio obtenido en la función numeroAleatorio2()
let resultado2 = numeroAleatorio2();

//Se declara una función llamada numeroAleatorio2 sin parámetros
function numeroAleatorio2() {
    /*Se retornara un número aleatorio que se encuentre entre 1 y 9.
    Se utiliza Math.floor para redondear un número hacia el entero anterior.
    Se utiliza Math.random para obtener un número decimal aleatorio en el rango [0, 9]*/
    return (Math.floor(Math.random()*10));
}

//Se limpia la consola
console.clear( );

//Se imprime en la consola el contenido del objeto math
console.log(math);

//Se declara una función flecha main asincrónica 
const main = async() => {

   //Se imprime en la consola un recuadro con un título
    console.log('****************************************'.blue);
    console.log('*       '.blue,'Operaciones Matemáticas'.bgGreen, '      *'.blue);
    console.log('****************************************\n'.blue);
    
     /*Se imprime en la consola un recuadro con un subtítulo, los nombres de las operaciones que se realizarán,
     los números aleatorios con los que se realizarán las operaciones y los resultados de cada una de las 
     operaciones mátematicas; se da interfaz y se aplican colores*/
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

//Se llama a la función main
main();
